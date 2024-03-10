import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDeatilPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <div>{issue?.title}</div>
      <div>{issue?.description}</div>
      <div>{issue?.status}</div>
      <div>{issue?.createdAt.toDateString()}</div>
    </div>
  );
};

export default IssueDeatilPage;
