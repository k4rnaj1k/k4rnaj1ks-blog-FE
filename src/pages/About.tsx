import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const AboutPage = () => <div className="container text-center mt-4">
    <Markdown remarkPlugins={[remarkBreaks]} className="card ms-5 me-5 fs-4 pt-4">
    &#10;
    Hi, my name is Vlad, I am 20 y.o. and I am a FullStack developer from Ukraine🌻.
    &#10;
    [![Donate to Ukraine.](https://media.giphy.com/media/9ZB4vLkYGlfaOilOV5/giphy.gif)](https://savelife.in.ua/en/donate-en/#donate-army-card-once)

    
    &#10;
    &#10;
    This blog is kinda a collection of my thoughts and notes. There are also plans on adding some teaching stuff.
    &#10;
    __Currently__, this website is in a very basic state, but I have many plans on improving it.
    &#10;
    ###### not sure how many of those plans are going to get implemented tho 😅
    &#10;
    ***
    &#10;
    &#10;&#10;
    
    This website is definitely a bit overengineered, but I wanted an excuse to use some fun technologies.
    &#10;
    [FE source code](https://github.com/k4rnaj1k/k4rnaj1ks-blog-fe)
    </Markdown>
</div>;