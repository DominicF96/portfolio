import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import {
  CenteredContainer,
  NarrowCenteredContainer,
  PageContainer,
} from "@/components/Container";
import { H1, Lead } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <PageContainer>
      <CenteredContainer>
        <Button variant="link" className="mb-8 text-white">
          <Link href="/blog" className="flex items-center">
            <ArrowLeftIcon className="mr-4" />
            Back to Articles
          </Link>
        </Button>
        <div className="grid grid-cols-4">
          <div className="col-span-1">Y</div>
          <div className="col-span-3">
            <article>
              <div className="pb-8 mb-8 border border-primary border-t-0 border-l-0 border-r-0">
                <Lead>
                  Hi, I'm <span className="font-bold">Dominic</span>. Here's my{" "}
                  <span className="font-bold">vision</span>.
                </Lead>
                <H1>{post.title}</H1>
                <time
                  dateTime={post.date}
                  className="mb-1 text-xs text-primary opacity-75"
                >
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
              <div
                className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
              />
            </article>
            <div className="mt-16 flex flex-col md:flex-row gap-2">
              <Button size="lg">Discuss on Twitter</Button>
              <Button size="lg" variant="outline">
                Discuss on LinkedIn
              </Button>
              <Button size="lg" variant="link">
                Share
              </Button>
            </div>
          </div>
        </div>
      </CenteredContainer>
    </PageContainer>
  );
};

export default PostLayout;
