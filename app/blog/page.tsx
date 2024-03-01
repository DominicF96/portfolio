"use client";
import React, { useEffect } from "react";
import { CenteredContainer, PageContainer } from "@/components/Container";
import Hero from "@/components/Blog/Hero";
import { defaultLocale, locales } from "@/i18n.config";
import { compareDesc } from "date-fns";
import { Post, allPosts } from "contentlayer/generated";
import { H2, Large } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import PostRow from "@/components/Blog/Posts/PostRow";
import PostsCategories from "@/components/Blog/Categories/PostsCategories";
import BlogSearch from "@/components/Blog/Search";
import metadata from "./metadata";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {};

// export const generateMetadata = metadata;

function BlogPage({}: Props) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Contentlayer doesn't play well under dynamic urls,
  // so we can't use the usual middleware-powered localization
  // strategy. Instead, we'll use query parameters and filter
  // the posts array.
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const locale = current.get("locale");
  if (!locale) {
    current.set("locale", defaultLocale);
    const newUrl = `${pathname}?${current.toString()}`;
    router.push(newUrl);
  }

  if (!locale) {
    return null;
  }

  return (
    <PageContainer>
      <Hero locale={locales[0]} />
      {/* <CenteredContainer className="mt-16 md:grid md:gap-16 md:grid-flow-row md:grid-cols-4"> */}
      <CenteredContainer className="mt-16">
        {/* <div className="hidden md:block col-span-1">
          <Large>Categories</Large>
          <div className="mt-4 flex flex-col gap-2">
            <PostsCategories posts={allPosts} />
          </div>
        </div> */}
        {/* <div className="col-span-3"> */}
        <H2 className="pb-0">Articles</H2>
        {/* <BlogSearch />
          <div className="mt-2 flex gap-2">
            <Button>Best</Button>
            <Button variant="outline">Most Recent</Button>
          </div> */}
        {/* <div className="md:hidden">
          <Large>Categories</Large>
          <div className="mt-4 flex md:flex-col flex-wrap gap-2">
            <PostsCategories posts={allPosts} />
          </div>
        </div> */}
        <div className="mt-4 md:mt-8">
          {posts
            .filter((post: Post) => post.locale === current.get("locale"))
            .map((post, idx) => (
              <PostRow key={idx} post={post} />
            ))}
        </div>
        {/* </div> */}
      </CenteredContainer>
    </PageContainer>
  );
}

export default BlogPage;
