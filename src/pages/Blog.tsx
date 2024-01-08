import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent/BlogContent";
import { FullscreenSpinner } from "../components/Spinner/FullScreenSpinner";
import { GET_BLOG } from "../queries/GetBlog";

export const BlogPage = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { loading, data } = useQuery(GET_BLOG, {
        variables: {
            blogId
        }
    });
    
    if (loading) {
        return <FullscreenSpinner />
    }

    return <div className="container"><BlogContent {...data.blogById} />
        <button onClick={() => navigate('/blogs')} className="btn btn-primary mb-4">Navigate back to main page</button>
    </div>;
};