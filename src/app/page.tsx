import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="text-white min-w-screen min-h-screen flex items-center bg-gray-400 justify-center flex-col gap-y-6">
      protected server page
      {JSON.stringify(data)}
      <LogoutButton />
    </div>
  );
};

export default Page;
