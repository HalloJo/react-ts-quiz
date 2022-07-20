import styled, {createGlobalStyle} from "styled-components";
import { palette } from "./styles/_Variables";

const baseCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Albert Sans', sans-serif;
        margin: 0;
    }
    
    body {
        background-color: ${palette.darkGreen};
    }

    section {
        height: 100vh;
        width: 100%;
    }
`

export const CenterWrapper = styled.div`
    ${baseCenter}

    height: 100%;
    width: 100%;
`

export const QuizWrapper = styled.div`
    ${baseCenter}

    width: 90%;
    padding: 20px;
    margin: auto auto;
    background-color: ${palette.darkGray};
    border-radius: 20px;
    text-align: center;   

    flex-direction: column;

    .score {
        background-color: ${palette.lightGreen};
        padding: 10px 20px;
        border-radius: 20px;
        margin: 0 0 20px;
    }

    .loading {
        color: white;
    }

    .number {
        font-weight: 200;
        margin: 10px 0;
    }

    .question {
        margin: 0 0 10px
    }
`
