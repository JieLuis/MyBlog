"use client";
import { Button, TextField, TextFieldInput } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="p-5 space-y-3 max-w-xl">
      <TextField.Root>
        <TextFieldInput placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="description" />
      <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssuePage;
