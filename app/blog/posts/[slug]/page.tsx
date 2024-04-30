import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { CenteredContainer, PageContainer } from "@/components/Container";
import { H1, Large, Lead, Small } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SharePost from "@/components/Blog/Share";
import PostCategories from "@/components/Blog/Categories";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <>
      <div className="md:hidden bg-background w-full sticky top-[70px] z-20 pb-4">
        <Button variant="link" className="text-white">
          <Link href="/blog" className="flex items-center">
            <ArrowLeftIcon className="mr-4" />
            Back to Articles
          </Link>
        </Button>
      </div>
      <PageContainer className="pt-24">
        <CenteredContainer>
          <Button
            variant="link"
            className="hidden md:block pl-0 mb-5 text-white bg-background z-20 sticky top-[76px]"
          >
            <Link href="/blog" className="rounded-l-none flex items-center">
              <ArrowLeftIcon className="mr-4" />
              Back to Articles
            </Link>
          </Button>
          <div className="pb-8 mb-8 border border-primary border-t-0 border-l-0 border-r-0">
            <Lead>
              Hi, I&apos;m <span className="font-bold">Dominic</span>.
              Here&apos;s my <span className="font-bold">vision</span>.
            </Lead>
            <H1 className="pb-2 pt-0">{post.title}</H1>
            <time dateTime={post.date} className="mb-1 text-xs opacity-75">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
          <div className="md:grid md:grid-cols-4 gap-16">
            <div className="md:col-span-1 flex flex-col gap-8 justify-between md:justify-start mb-8 md:mb-0">
              {/* <div className="sticky top-[120px]"> */}
              <div>
                <Large>Categories</Large>
                <div className="mt-2 flex md:flex-col gap-2">
                  <PostCategories post={post} />
                </div>
              </div>
              {/* <div>
                <Large>Previous Article</Large>
                <div className="mt-2 flex flex-col gap-2">
                  <a href="https://example.com">
                    Interview Mistakes I&apos;ve Seen People Do
                  </a>
                </div>
              </div>
              <div>
                <Large>Next Article</Large>
                <div className="mt-2 flex flex-col gap-2">
                  <a href="https://example.com">
                    My Idea of a Feature-rich Web App
                  </a>
                </div>
              </div> */}
              {/* </div> */}
            </div>
            <div className="md:col-span-3">
              <div className="mb-8">
                <Image
                  src={`/images/posts/${post.img}`}
                  alt={post.img_alt}
                  height={250}
                  width={1000}
                  className="shadow-lg rounded-lg"
                />
                <div className="mt-2">
                  <Small className="italic opacity-75">{post.img_alt}</Small>
                  &nbsp;•&nbsp;
                  <Small className="opacity-75">
                    {post.img_src.indexOf("http") !== -1 ? (
                      <Link
                        href={post.img_src}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </Link>
                    ) : (
                      post.img_src
                    )}
                  </Small>
                </div>
              </div>
              <article>
                <div
                  className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                  dangerouslySetInnerHTML={{ __html: post.body.html }}
                />
              </article>
              <Link href="/" className="flex items-center">
                <Avatar className="inline-block mr-4 h-11 w-11">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/36671850?v=4"
                    alt="@DominicF96"
                  />
                  <AvatarFallback
                    className="bg-primary text-primary-foreground font-bold"
                    style={{ fontFamily: "Poppins" }}
                  >
                    DF
                  </AvatarFallback>
                </Avatar>
                <span
                  className="whitespace-nowrap"
                  style={{ fontSize: "20px" }}
                >
                  Dominic Fournier
                </span>
              </Link>
              <div className="mt-16">
                <Large>Discuss & Share</Large>
                <SharePost post={post} />
              </div>
            </div>
          </div>
        </CenteredContainer>
      </PageContainer>
    </>
  );
};

export default PostLayout;
