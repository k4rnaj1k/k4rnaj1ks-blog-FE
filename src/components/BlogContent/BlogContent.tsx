import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type BlogContentProps = {
    title: string,
    content: string,
    author: { username: string }
}


export const BlogContent = ({ title, content, author }: BlogContentProps) => <div>
    <div className="container pb-2 mb-4 mt-4 bg-light-subtle">
        <div className="card-body">
            <p className="fs-3 link-light link-underline-opacity-100-hover link-underline-opacity-0">{title}</p>
            <p className="text-start fs-6 text-white-50">By @{author.username}</p>
            <Markdown className="row fs-4 text-wrap"
            components={{
                code(props) {
                  const {children, className, ref, node, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={dark}
                    />
                  ) : (
                    <code {...rest} ref={ref} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            >{content}</Markdown>
        </div>
    </div>
</div>;