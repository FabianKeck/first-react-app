import React ,{useState} from "react";
import ArticleHeading from "./ArticleHeading";
import ArticleText from "./ArticleText";
import '../css/Article.css';

function Article({data}){
    const [likeCount, setLikeCount] = useState(0);


    function updateButton(){
        setLikeCount(likeCount+1);
    }


    return(
    <article className="Article">
        <ArticleHeading title={data.title}/>
        <ArticleText body={data.body}/>
        <button onClick={updateButton}>Gefällt mir!!</button>
        <p>{likeCount} Leute gefiel dieser Artikel</p>
    </article>
    );
}

export default Article;

