'use client'
import React, { useState } from 'react'
import Button from '../ui/button/button'
import { titleFont } from '@/config/fonts'
import { Title } from '../ui/font-style/title'

interface Question {
  id: number;
  text: string;
}

interface Answer {
  [key: number]: string;
}

export const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionInput, setQuestionInput] = useState('')
  const [answers, setAnswers] = useState<Answer>({})

  const handleAskQuestion = () => {
    if (questionInput.trim() === '') {return}
    const newQuestion: Question = { id: Date.now(), text: questionInput }
    setQuestions([...questions, newQuestion])
    setQuestionInput('')
  }

  const handleAnswer = (id: number, answerText: string) => {
    setAnswers((prev) => ({ ...prev, [id]: answerText }))
  }

  return (
    <div className='p-4 border border-sblue/20 rounded-md w-full'>
      <Title title='Preguntas y respuestas' />
      <div className='md:mb-4 flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full'>
        <input
          type='text'
          className='border border-sblue/20 active:border-sblue max-w-[840px] rounded-lg p-3 w-full'
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          placeholder='Escribe tu pregunta...'
        />
        <Button
          variant='action'
          onClick={handleAskQuestion}
        >
          Preguntar
        </Button>
      </div>
      <div>
        {questions.map((q) => (
          <div key={q.id} className='border-b py-2'>
            <p className='font-semibold'>{q.text}</p>
            {answers[q.id] ? (
              <p className='text-green-600'>{answers[q.id]}</p>
            ) : (
              <input
                type='text'
                className='border p-1 w-full'
                placeholder='Responder...'
                onBlur={(e) => handleAnswer(q.id, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}