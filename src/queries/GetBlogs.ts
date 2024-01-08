import { gql } from "@apollo/client";
import { Author } from "../types/author";

export type GetBlogs = {
  allBlogs: [
    {
      id: string;
      title: string;
      content: string;
      author: Author;
    }
  ];
};

export const GET_BLOGS = gql`
  query getBlogs {
    allBlogs {
      id
      title
      content
      author {
        username
        firstName
      }
    }
  }
`;
