import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Albert Sans', sans-serif;
    }
    
    hmtl {
        height: 100%;
    }
    
    body {
        background-color: #777764;
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #4f4747;
    padding: 5vw;
    border-radius: 10px;
`