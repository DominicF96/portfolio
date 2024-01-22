import { Post } from "@/.contentlayer/generated";
import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {
  post: Post;
};

function PostCategories({ post }: Props) {
  const categories = post.tags.sort();

  return categories.map((category, idx) => (
    <Badge key={idx} variant="outline" className="w-fit">
      {category}
    </Badge>
  ));
}

export default PostCategories;
