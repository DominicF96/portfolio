"use client";
import { Post } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  Share1Icon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

type Props = {
  post: Post;
};

function SharePost({ post }: Props) {
  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Copied to clipboard");
  };

  return (
    <div className="flex gap-2 mt-2">
      <Button asChild>
        <Link href="" target="_blank">
          <LinkedInLogoIcon />
        </Link>
      </Button>
      <Button asChild>
        <Link href="" target="_blank">
          <TwitterLogoIcon />
        </Link>
      </Button>
      <Button variant="link" onClick={() => copyUrl()}>
        <Share1Icon />
      </Button>
    </div>
  );
}

export default SharePost;
