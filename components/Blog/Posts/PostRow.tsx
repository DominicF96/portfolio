"use client";
import React from "react";
import { Post } from "@/.contentlayer/generated";
import Link from "next/link";
import { H3, Muted, P } from "@/components/Typography";
import { dateFormat } from "@/utils/data";
import { Badge } from "@/components/ui/badge";
import PostCategories from "../Categories";

type Props = {
  post: Post;
};

function PostRow({ post }: Props) {
  return (
    <Link href={post.url}>
      <div
        className="relative pt-4 pb-8 border border-primary border-l-0 border-r-0 first:border-t-0"
        style={{ marginTop: "-1px" }}
      >
        <H3 className="pb-0">{post.title}</H3>
        <Muted>
          <time>{dateFormat("en").format(new Date(post.date))}</time>
        </Muted>
        <P>{post.excerpt}</P>
        <div className="mt-4 flex gap-2">
          <PostCategories post={post} />
        </div>
      </div>
    </Link>
  );
}

export default PostRow;
