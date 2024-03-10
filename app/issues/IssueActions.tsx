import { Button, Link } from "@radix-ui/themes";
import React from "react";

const IssueActions = () => {
  return (
    <Button>
      <Link href="/issues/new">New Issue</Link>
    </Button>
  );
};

export default IssueActions;
