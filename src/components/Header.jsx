import React from 'react'
import img from '../assets/quiz-logo.png'

export const Header = () => {
  return (
    <header>
        <img src={img} alt='a Quiz logo'/>
        <h1>ReactQuiz</h1>
    </header>
  )
}
