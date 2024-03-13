import prisma from "@/prisma/client";
import BlogSummary from "./BlogSummary";
import LatestBlogs from "./LatestBlogs";
import BlogChart from "./BlogChart";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <>
      <LatestBlogs />
      <BlogChart open={open} inProgress={inProgress} closed={closed} />
    </>
  );
}
