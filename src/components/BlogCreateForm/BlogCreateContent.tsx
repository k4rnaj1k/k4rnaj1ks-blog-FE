import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { BlogContent } from "../BlogContent/BlogContent";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../queries/GetAuthors";
import { Author } from "../../types/author";
import { CREATE_BLOG } from "../../mutations/newBlog";
import { useNavigate } from "react-router-dom";

export const BlogCreateForm = () => {
    const { register, getValues, handleSubmit, watch } = useForm();
    const [isPreviewing, setPreviewing] = useState(false);
    const fieldWatch = watch(['title', 'content', 'authorId']);
    const navigate = useNavigate();
    const [title, content, authorId] = fieldWatch;

    const { data: getAuthors, loading: authorsLoading } = useQuery(GET_AUTHORS);
    const allAuthors = getAuthors?.allAuthors || [];

    const [mutate, { loading }] = useMutation(CREATE_BLOG);

    const previewContent = useCallback(() => {
        const author = allAuthors.find((author: Author) => author.id === authorId);

        return <BlogContent content={content} title={title} author={author} />;
    }, [fieldWatch]);


    const authorsOptions = () => {
        if (authorsLoading) {
            return 'Loading...'
        }

        return <select className="form-select" {...register('authorId', { deps: [allAuthors], required: true })}>
            {allAuthors.map((author: Author) => <option key={author.id} value={author.id}>{`${author.firstName}(${author.username})`}</option>)}
        </select>
    };



    const onSubmit = () => {
        const [authorId, title, content] = getValues(['authorId', 'title', 'content']);
        mutate({
            variables: { authorId, title, content }, onCompleted:
                (data) => navigate(`/blogs/${data.newBlog.id}`)
        })
    };
    return <div className="container mt-3">
        <form aria-disabled={loading} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <p className="h5">Blog author</p>
                {authorsOptions()}
            </div>
            <div className="mb-3">
                <p className="h5">Blog title</p>
                <textarea rows={1} {...register('title', { required: true })} className="form-control" />
            </div>
            <p className="h5">Blog content</p>
            <textarea rows={10} style={{ 'resize': 'vertical' }} {...register('content', { required: true })} className="form-control" />
            <div className="btn-group pt-3">
                <button type="button" className="btn btn-primary" onClick={() => setPreviewing(preving => !preving)}>Enable/Disable preview</button>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
            {isPreviewing && previewContent()}
        </form>
    </div>;
};