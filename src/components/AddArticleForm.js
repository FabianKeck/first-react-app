import React,{useState} from "react";


export default function AddArticleForm({onAddArticleForm}){
    const [title, setTitle] = useState("");

    const [body, setBody] = useState("");
    function sendData(){
        const data = {
            title: title,
            body: body
        } ;
        onAddArticleForm(
        );
    }
    return(
        <form>
            <label>Title:<input onChange={event => {setTitle(event.target.value)}} /> </label>
            {title}
            <label> Body: <input onChange={event => {setBody(event.target.value)}}/> </label>
            <button type="button" onClick={
                sendData
            }> Submit Article </button>
        </form>
    );
}