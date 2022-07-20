import styled from "styled-components";
import { palette } from "../../styles/_Variables";

export const ButtonWrapper = styled.button`
    border: none;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    background-color: ${palette.lightGreen};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
`