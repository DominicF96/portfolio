import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};

function BlogSearch({}: Props) {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search"
        className="border-primary placeholder:text-primary placeholder:opacity-75"
      />
      <Button>
        <MagnifyingGlassIcon />
      </Button>
    </div>
  );
}

export default BlogSearch;
