import React, {useCallback, useState} from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import Button from './components/Button/Button';
import { GlobalStyle, CenterWrapper, QuizWrapper } from './App.styles';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';

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
  const [questionIndex, setQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startQuiz = useCallback(async () => {
    setLoading(true)
    setGameOver(false)
    setScore(0)
    setUserAnswers([])
    setQuestionIndex(0)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setLoading(false)
  }, [])

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = event.currentTarget.value
      const correct = questions[questionIndex].correct_answer === answer
      if(correct) setScore(prev => prev + 1)
      const answerObject: AnswerObject = {
        question: questions[questionIndex].question,
        answer,
        correct,
        correctAnswer: questions[questionIndex].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = questionIndex + 1

    nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setQuestionIndex(nextQuestion)

  }


  return (
    <section>
      <GlobalStyle />
      <CenterWrapper>
        <QuizWrapper>
          <Heading className='title' title="A fun little Quiz!" />

          { gameOver || userAnswers.length === TOTAL_QUESTIONS ? <Button className="start" onClick={startQuiz} label={ !gameOver ? "Play again!" : "Start"} /> : null }
          
          { !gameOver ? <Paragraph className='score'>Score: {score}</Paragraph> : null }

          { userAnswers.length === TOTAL_QUESTIONS ? <Paragraph className='result'>Congratulations! You finished the quiz with a score of {score}! Not satisfied? Try again!</Paragraph> : null  }

          { loading && <Paragraph className="loading" children="Loading questions..." /> }

          { !gameOver && !loading && 
            <QuestionCard 
              questionNumber={questionIndex + 1} 
              totalQuestions={TOTAL_QUESTIONS} 
              question={questions[questionIndex].question} 
              answers={questions[questionIndex].answers} 
              userAnswer={userAnswers ? userAnswers[questionIndex] : undefined} callBack={checkAnswer}  /> }

          { !gameOver && !loading && userAnswers.length === questionIndex + 1 && questionIndex != TOTAL_QUESTIONS - 1 ? <Button className="next" onClick={nextQuestion} label="Next question" /> : null }
          </QuizWrapper>
        </CenterWrapper>
    </section>
  );
}

export default App;
