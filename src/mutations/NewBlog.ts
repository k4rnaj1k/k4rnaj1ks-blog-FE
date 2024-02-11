import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation createBlog($authorId: ID, $content: String, $title: String) {
    newBlog(
      blogInput: { authorId: $authorId, content: $content, title: $title }
    ) {
      id
    }
  }
`;
