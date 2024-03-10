import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { Card } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

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
      <div>{issue?.status}</div>
      <div>{issue?.createdAt.toDateString()}</div>
      <Card className="prose">
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDeatilPage;
