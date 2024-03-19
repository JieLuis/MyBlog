"use client";
import { useState } from "react";
import { Box, Heading } from "@radix-ui/themes";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export interface Tag {
  name: string;
  isSelected?: boolean;
}

const ProjectTags = () => {
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>([
    { name: "All", isSelected: true },
    { name: "Full Stack" },
    { name: "Web" },
    { name: "Mobile" },
  ]);
  const currentPath = usePathname();

  const handleTagClick = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.forEach((tag, i) => {
      if (i === index) {
        tag.isSelected = true;

        const params = new URLSearchParams();
        params.append("tag", tag.name);
        const query = params.size ? "?" + params.toString() : "";
        router.push(currentPath + query, { scroll: false });
      } else {
        tag.isSelected = false;
      }
    });
    setTags(updatedTags);
  };

  const buttonStyles = (isSelected: boolean) =>
    isSelected
      ? "text-yellow-700 border-teal-600"
      : "text-yellow-500 border-teal-400 hover:border-teal-600";

  return (
    <>
      <Box className="text-center mb-3">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 lg:text-6xl">
          Projects
        </h1>
      </Box>
      <div className="flex justify-center items-center gap-2 py-6 text-yellow-500 font-bold">
        {tags.map((tagItem, index) => (
          <button
            key={tagItem.name}
            className={`${buttonStyles(
              tagItem.isSelected!
            )} rounded-full border-4 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => handleTagClick(index)}
          >
            {tagItem.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectTags;
