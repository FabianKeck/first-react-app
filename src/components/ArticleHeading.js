import React from "react";
import {StyledArticleHeader} from "./StyledArticleHeader";


function ArticleHeading(props){
    return (
        <StyledArticleHeader>
            {props.children}
        </StyledArticleHeader>
    );
}
export default ArticleHeading;