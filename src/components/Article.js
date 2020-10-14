import React ,{useState} from "react";
import ArticleHeading from "./ArticleHeading";
import ArticleText from "./ArticleText";
import '../css/Article.css';
import {StyledButton} from "./StyledButton";
import StyledButtonOnClick from "./StyledButtonOnClick";
import {StyledArticle} from "./StyledArticle";

function Article({data}){
    const [likeCount, setLikeCount] = useState(0);
    function updateButton(){
        setLikeCount(likeCount+1);
    }
    return(
    <StyledArticle className="Article">
        <ArticleHeading>
            <articleTitle>{data.title}</articleTitle>
            <articleSubTitle> totally a Subtitle</articleSubTitle>
        </ArticleHeading>
        <ArticleText body={data.body}/>
        <StyledButton primary={likeCount<5} onClick={updateButton}>Gefällt mir!!</StyledButton>
        <p>{likeCount} Leute gefiel dieser Artikel</p>
        <StyledButtonOnClick>Click</StyledButtonOnClick>
    </StyledArticle>
    );
}

export default Article;

