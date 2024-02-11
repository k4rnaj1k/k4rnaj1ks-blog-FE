import { gql } from "@apollo/client";

export const UPDATE_BLOG = gql`
    mutation UpdateBlog($authorId: ID, $content: String, $title: String, $blogId: ID) {
        editBlog(blogInput: {
            authorId: $authorId, content: $content, title: $title
        }, id: $blogId) {
            id
        }
    }
`;