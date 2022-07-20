import React, { ReactElement } from "react"
import { AnswerObject } from "../../App"
import Paragraph from "../Paragraph/Paragraph"
import { AnswerButton, QuestionWrapper } from  "./QuestionCard.styles"

type QuestionCardProps = {
    question: string,
    answers: string[],
    callBack: (event: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard = ({question, answers, callBack, userAnswer, questionNumber, totalQuestions}: QuestionCardProps): ReactElement => (
    <QuestionWrapper>
        <Paragraph className="number">
            Question: {questionNumber} / {totalQuestions}
        </Paragraph>
        <Paragraph className="question" >
            {question}
        </Paragraph>        
        <div>
            {answers.map(answer => (
                <AnswerButton key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} disabled={userAnswer ? true : false} value={answer} onClick={callBack} >
                        <span>{answer}</span>
                </AnswerButton>
            ))}
        </div>
    </QuestionWrapper>
)

export default QuestionCard