import React, {useState} from 'react';
import {StyledButton} from "./StyledButton";

export default function StyledButtonOnClick (){
    const[clickedButton, setclickedButton] = useState(false);

    return (<StyledButton clicked={clickedButton} onClick={() => setclickedButton(true)} ></StyledButton>);
}