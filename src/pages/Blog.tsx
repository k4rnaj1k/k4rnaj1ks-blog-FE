import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent/BlogContent";
import { FullscreenSpinner } from "../components/Spinner/FullScreenSpinner";
import { GET_BLOG } from "../queries/GetBlog";
import { isLoggedIn } from "../util/is-logged-in";

export const BlogPage = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { loading, data } = useQuery(GET_BLOG, {
        variables: {
            blogId
        }
    });

    const loggedIn = isLoggedIn();

    if (loading) {
        return <FullscreenSpinner />
    }

    return <div className="container"><BlogContent {...data.blogById} />
        <button onClick={() => navigate('/blogs')} className="btn btn-primary mb-4">Navigate back to main page</button>
        {loggedIn && <button className="btn btn-secondary mb-4" onClick={() => navigate(`/blogs/${blogId}/edit`)}>Edit blog</button>}
    </div>;
};