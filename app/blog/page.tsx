import React from "react";
import { CenteredContainer, PageContainer } from "@/components/Container";
import Hero from "@/components/Blog/Hero";
import { Locale, locales } from "@/i18n.config";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { H2, H3 } from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

type Props = {};

function PostCard(post: Post) {
  return (
    <div className="mb-8 pb-8 border border-primary border-t-0 border-r-0 border-l-0">
      <H3 className="text-xl pb-0">
        <Link className="font-bold" href={post.url}>
          {post.title}
        </Link>
      </H3>
      <time
        dateTime={post.date}
        className="mb-4 block text-xs text-white opacity-75"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <div className="flex gap-2 mt-4">
        <Badge variant="outline">Management</Badge>
        <Badge variant="outline">Collaboration</Badge>
      </div>
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
      <CenteredContainer className="mt-16 grid gap-4 grid-flow-row grid-cols-4">
        <div className="col-span-1">
          <H3>Categories</H3>
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="w-fit">
              Management
            </Badge>
            <Badge variant="outline" className="w-fit">
              Collaboration
            </Badge>
            <Badge variant="outline" className="w-fit">
              Design
            </Badge>
            <Badge variant="outline" className="w-fit">
              Product
            </Badge>
            <Badge variant="outline" className="w-fit">
              Frontend
            </Badge>
          </div>
        </div>
        <div className="col-span-3">
          <H2>Articles</H2>
          <div className="flex gap-2">
            <Input
              placeholder="Search"
              className="border-primary placeholder:text-primary placeholder:opacity-75"
            />
            <Button>
              <MagnifyingGlassIcon />
            </Button>
          </div>
          <div className="mt-2 flex gap-2">
            <Button>Best</Button>
            <Button variant="outline">Most Recent</Button>
          </div>
          <div className="mt-8">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </CenteredContainer>
    </PageContainer>
  );
}

export default BlogPage;
