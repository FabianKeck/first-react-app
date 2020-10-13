import React from "react";
import Heading from "./Heading";
import ArticleText from "./ArticleText";

function Article(){
    return(
    <article className="Article">
        <Heading/>
        <ArticleText/>
    </article>
    )
}

export default Article;