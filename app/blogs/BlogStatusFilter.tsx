"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React, { use } from "react";
import { useRouter } from "next/navigation";

const statuses: { label: String; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const BlogStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(status) => {
        status = status === "unSelected" ? "" : status;
        const query = status ? `?status=${status}` : "";
        router.push("/blogs" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "unSelected"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default BlogStatusFilter;
