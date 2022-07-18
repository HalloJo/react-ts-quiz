import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';


const App = () => {

  type AnswerObject = {
    question: string,
    answer: string,
    correct: string,
    correctAnswer: string,
  }

  const TOTAL_QUESTIONS = 10

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>React Quiz!</h1>
      <button className="start" onClick={startQuiz}>Start..</button>
      <p className="score"></p>
      <p>Loading Questions</p>
      {/* <QuestionCard questionNumber={number + 1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callBack={checkAnswer}  /> */}
      <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
