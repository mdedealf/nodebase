import { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import Client from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  // Leveraging trpc prefetching for better performance and populating tanstack query cache
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-red-500 min-w-screen min-h-screen flex items-center bg-black justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
