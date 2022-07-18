import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import Button from './components/Button/Button';
import { GlobalStyle, Wrapper } from './App.styles';
import Heading from './components/Heading/Heading';

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
}

const TOTAL_QUESTIONS = 10

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

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
    if(!gameOver){
      const answer = event.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if(correct) setScore(prev => prev + 1)
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1

    nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQuestion)

  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Heading className='title' title="A fun little React Quiz!" />
        { gameOver || userAnswers.length === TOTAL_QUESTIONS ? <Button className="start" onClick={startQuiz} label="Start" /> : null }
        
        { !gameOver ? <p className="score">Score: {score}</p> : null }
        { loading && <p>Loading Questions..</p> }
        { !gameOver && !loading && 
          <QuestionCard 
            questionNumber={number + 1} 
            totalQuestions={TOTAL_QUESTIONS} 
            question={questions[number].question} 
            answers={questions[number].answers} 
            userAnswer={userAnswers ? userAnswers[number] : undefined} callBack={checkAnswer}  /> }
        { !gameOver && !loading && userAnswers.length === number + 1 && number != TOTAL_QUESTIONS - 1 ? <Button className="next" onClick={nextQuestion} label="Next question" /> : null }
      </Wrapper>
    </>
  );
}

export default App;
