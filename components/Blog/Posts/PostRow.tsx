"use client";
import React from "react";
import { Post } from "@/.contentlayer/generated";
import Link from "next/link";
import { H3, Muted, P } from "@/components/Typography";
import PostCategories from "../Categories";
import Image from "next/image";
import { format, parseISO } from "date-fns";

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
        <div className="md:grid md:grid-flow-row md:grid-cols-6 gap-8">
          <Image
            src={`/images/posts/${post.img}`}
            className="md:my-6 md:col-span-2 shadow-lg rounded-lg"
            alt={post.img_alt}
            width={900}
            height={300}
          />
          <div className="md:col-span-4">
            <H3 className="pb-0">{post.title}</H3>
            <Muted>
              <time>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
            </Muted>
            <P className="opacity-90">{post.excerpt}</P>
            <div className="mt-4 flex gap-2">
              <PostCategories post={post} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostRow;
