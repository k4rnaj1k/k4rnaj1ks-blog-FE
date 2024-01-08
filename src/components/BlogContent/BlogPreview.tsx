import Markdown from "react-markdown";
import { Author } from "../../types/author";
import { Link, useNavigate } from "react-router-dom";
import { cropContent } from "../../util/crop-blog-content";

type BlogPreviewProps = {
    id: number | string,
    title: string,
    content: string,
    author: Author
}

export const BlogPreview = ({ title, content, author, id }: BlogPreviewProps) => {
    const navigate = useNavigate();
    const { cropped, isCropped } = cropContent(content)

    return <div className="card text-start pl-2 pb-2 mb-4 mt-4 bg-light-subtle">
        <div className="card-body">
            <a onClick={() => navigate(`/blogs/${id}`)} className="link-light link-underline-opacity-100-hover link-underline-opacity-0 fs-3">{title}</a>
            <p className="text-start fs-6 text-white-50">By @{author.username}</p>
            <Markdown className="row fs-4 text-wrap">{cropped}</Markdown>
            {isCropped && <Link to={`/blogs/${id}`}>Continue reading...</Link>}
        </div>
    </div>;
}