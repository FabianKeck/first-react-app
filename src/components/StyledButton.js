import styled from 'styled-components/macro'
import {css} from "styled-components";

export const StyledButton = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
  
  ${props => props.clicked && css`
    background: blue;
    color: white;
   `}
  `;
