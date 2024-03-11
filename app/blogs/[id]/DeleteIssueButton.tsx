"use client";

import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteIssue = async () => {
    try {
      setIsDeleting(true);
      await axios.delete("/api/blogs/" + issueId);
      router.push("/blogs");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button disabled={isDeleting} color="red">
            Delete
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm?</AlertDialog.Title>
          <AlertDialog.Description></AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={deleteIssue}>
                Confirm
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            Could not delete this
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            my="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
