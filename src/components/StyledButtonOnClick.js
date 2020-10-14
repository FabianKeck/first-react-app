import React, {useState} from 'react';
import {StyledButton} from "./StyledButton";

export default function StyledButtonOnClick (props){
    const[clickedButton, setclickedButton] = useState(false);

    return (<StyledButton clicked={clickedButton} onClick={() => setclickedButton(true)} >
        {props.children}
    </StyledButton>);
}
