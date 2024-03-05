import React from 'react'

export const Answer = ({children, onSelectAnswer, ...props}) => {
  return (
    <li className='answer'><button onClick={() => onSelectAnswer(children)}>{children}</button></li>
  )
}
