import { gql } from "@apollo/client";
import { Blog } from "../types/blog";

export type GetBlog = {
  blogById: Blog;
};

export const GET_BLOG = gql`
  query getBlog($blogId: ID) {
    blogById(id: $blogId) {
      title
      content
      author {
        username
      }
    }
  }
`;
