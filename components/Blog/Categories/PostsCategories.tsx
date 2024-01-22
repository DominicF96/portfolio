import React from "react";
import { Post } from "@/.contentlayer/generated";
import { Badge } from "@/components/ui/badge";

type Props = {
  posts: Array<Post>;
};

function PostsCategories({ posts }: Props) {
  const categories = posts.map((post) => post.tags).flat();
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories.sort().map((category, idx) => (
    <Badge key={idx} variant="outline" className="w-fit">
      {category}
    </Badge>
  ));
}

export default PostsCategories;
