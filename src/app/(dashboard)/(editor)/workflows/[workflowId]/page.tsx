import { requireAuth } from "@/lib/auth-utils";

type PageProps = {
  params: Promise<{ workflowId: string }>;
};

const Page = async ({ params }: PageProps) => {
  await requireAuth();

  const { workflowId } = await params;

  return <div>Workflow id : {workflowId} </div>;
};

export default Page;
