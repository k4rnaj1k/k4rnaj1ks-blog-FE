import { useQuery } from "@apollo/client";
import { GET_BLOGS, GetBlogs } from "../queries/GetBlogs";
import { FullscreenSpinner } from "../components/Spinner/FullScreenSpinner";
import { BlogPreview } from "../components/BlogContent/BlogPreview";

export const BlogsPage = () => {
    const { loading, data } = useQuery<GetBlogs>(GET_BLOGS);

    if (loading) {
        return <FullscreenSpinner />;
    }

    return <div className="container">{
        data?.allBlogs.map(blog => <BlogPreview {...blog} />)
    }</div>;
};