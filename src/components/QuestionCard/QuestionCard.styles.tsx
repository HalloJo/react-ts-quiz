import styled from "styled-components";
import { palette } from "../../styles/_Variables";

export const QuestionWrapper = styled.div`
    background-color: ${palette.lightGreen};
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    margin: 0 0 20px;
`

type ButtonProps = {
    correct: boolean,
    userClicked: boolean,
}

export const AnswerButton = styled.button<ButtonProps>`
    
    &:not(:last-child) {
        margin: 0 0 10px;
    }

    background: ${({ correct, userClicked}) =>
        correct ? `${palette.correctGreen}` : !correct && userClicked ? `${palette.wrongRed}` : `${palette.orange}`
    };
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 20px;
    color: ${palette.black};
    transition: background 0.3s ease;

`
