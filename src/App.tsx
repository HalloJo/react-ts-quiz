import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import Button from './components/Button/Button';


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

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>React Quiz!</h1>
      { gameOver || userAnswers.length === TOTAL_QUESTIONS ? <Button onClick={startQuiz} /> : null }
      
      { !gameOver ? <p className="score">Score:</p> : null }
      { loading && <p>Loading Questions..</p> }
      
      {/* <QuestionCard questionNumber={number + 1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callBack={checkAnswer}  /> */}
      <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
