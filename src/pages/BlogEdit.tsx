import { useMutation, useQuery } from "@apollo/client";
import { GET_BLOG } from "../queries/GetBlog";
import { useNavigate, useParams } from "react-router-dom";
import { FullscreenSpinner } from "../components/Spinner/FullScreenSpinner";
import { UPDATE_BLOG } from "../mutations/UpdateBlog";
import { BlogData, BlogDataForm } from "../components/BlogCreateForm/BlogDataContent";
import { GET_BLOGS } from "../queries/GetBlogs";

export const BlogEditPage = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();

    const { loading, data } = useQuery(GET_BLOG, {
        variables: {
            blogId
        }
    });

    const [mutate] = useMutation(UPDATE_BLOG, { refetchQueries: [GET_BLOGS, GET_BLOG] })

    const onSubmit = ({ authorId, title, content }: BlogData) => mutate({
        variables: { authorId, title, content, blogId }, onCompleted:
            (data) => {
                navigate(`/blogs/${data.editBlog.id}`);

            }
    });

    if (loading || !data) {
        return <FullscreenSpinner />;
    }
    // TODO: error handling for when data is undefined and loading is true

    const { title, author, content } = data.blogById;

    return (<div className="content">
        <BlogDataForm
            onSubmit={onSubmit}
            title={title}
            authorId={author?.id}
            content={content}
        />
    </div>);
};