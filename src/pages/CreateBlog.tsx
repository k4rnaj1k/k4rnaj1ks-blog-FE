import { useMutation } from "@apollo/client";
import { BlogData, BlogDataForm } from "../components/BlogCreateForm/BlogDataContent";
import { CREATE_BLOG } from "../mutations/NewBlog";
import { useNavigate } from "react-router-dom";
import { FullscreenSpinner } from "../components/Spinner/FullScreenSpinner";

export const CreateBlogPage = () => {
    const navigate = useNavigate();
    const [mutate, { loading }] = useMutation(CREATE_BLOG);

    const onSubmit = ({ authorId, title, content }: BlogData) => mutate({
        variables: { authorId, title, content }, onCompleted:
            (data) => navigate(`/blogs/${data.newBlog.id}`)
    });
    if(loading) {
        return <FullscreenSpinner />;
    }
    return <div className="container"><BlogDataForm onSubmit={onSubmit} /></div>;
};