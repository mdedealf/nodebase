import React from "react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="text-red-500  h-screen">
      Hello Page
      <Button variant="outline">Click me</Button>
      {users.map((user) => (
        <div key={user.id}>
          {user.email} - {user.name}
        </div>
      ))}
    </div>
  );
};

export default Page;
