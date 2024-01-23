import React from "react";
import { CenteredContainer, PageContainer } from "@/components/Container";
import Hero from "@/components/Blog/Hero";
import { locales } from "@/i18n.config";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { H2, Large } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import PostRow from "@/components/Blog/Posts/PostRow";
import PostsCategories from "@/components/Blog/Categories/PostsCategories";
import BlogSearch from "@/components/Blog/Search";
import metadata from "./metadata";

type Props = {};

export const generateMetadata = metadata;

function BlogPage({}: Props) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

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
          {posts.map((post, idx) => (
            <PostRow key={idx} post={post} />
          ))}
        </div>
        {/* </div> */}
      </CenteredContainer>
    </PageContainer>
  );
}

export default BlogPage;
