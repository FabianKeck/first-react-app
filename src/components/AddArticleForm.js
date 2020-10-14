import React,{useState} from "react";
import {StyledButton} from "./StyledButton";


export default function AddArticleForm({onAddArticleForm}){
    const [title, setTitle] = useState("");

    const [body, setBody] = useState("");
    function sendData(){
        const data = {
            title: title,
            body: body
        } ;
        onAddArticleForm(data);
    }
    return(
        <form>
            <label>Title:<input onChange={event => {setTitle(event.target.value)}} /> </label>
            <label> Body: <input onChange={event => {setBody(event.target.value)}}/> </label>
            <StyledButton type="button" onClick={
                sendData
            }> Submit Article </StyledButton>
        </form>
    );
}