"use client";
import { Button, TextArea, TextField, TextFieldInput } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="p-5 space-y-3 max-w-xl">
      <TextField.Root>
        <TextFieldInput placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="description" />
      <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssuePage;
