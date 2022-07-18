import React, { ReactElement } from "react"
import { AnswerObject } from "../../App"

type QuestionCardProps = {
    question: string,
    answers: string[],
    callBack: (event: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard = ({question, answers, callBack, userAnswer, questionNumber, totalQuestions}: QuestionCardProps): ReactElement => (
    <div>
        <p className="number">Question: {questionNumber} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard