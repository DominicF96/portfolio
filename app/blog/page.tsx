import React from "react";
import { CenteredContainer, PageContainer } from "@/components/Container";
import Hero from "@/components/Blog/Hero";
import { Locale, locales } from "@/i18n.config";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { H2, H3 } from "@/components/Typography";

type Props = {};

function PostCard(post: Post) {
  return (
    <div className="mb-8 pb-8 border border-primary border-t-0 border-r-0 border-l-0">
      <H3 className="text-xl">
        <Link className="font-bold" href={post.url}>
          {post.title}
        </Link>
      </H3>
      <time
        dateTime={post.date}
        className="mb-4 block text-xs text-primary opacity-75"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </div>
  );
}

function BlogPage({}: Props) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(posts);
  return (
    <PageContainer>
      <Hero locale={locales[0]} />
      <CenteredContainer>
        <div className="mt-16">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </CenteredContainer>
    </PageContainer>
  );
}

export default BlogPage;
