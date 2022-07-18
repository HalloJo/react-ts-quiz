import { ReactElement } from "react"

type QuestionCardProps = {
    question: string,
    answers: string[],
    callBack: any,
    userAnswer: any,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard = ({question, answers, callBack, userAnswer, questionNumber, totalQuestions}: QuestionCardProps): ReactElement => (
    <div>
        <p className="number">Question: {questionNumber} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard