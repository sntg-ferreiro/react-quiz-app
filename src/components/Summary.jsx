import React from 'react'
import IMG from '../assets/quiz-complete.png'

export const Summary = () => {
  return (
    <div id="summary">
    <img src={IMG} alt='A logo of the completed quiz'/>
    <h2>Congratulations on completing this quiz!</h2>
    </div>
  )
}
