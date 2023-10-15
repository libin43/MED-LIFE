import React from 'react'
import "./RoundButton.css"

export const ButtonRound = ({ children, style, onClick }) => {
    const handleClick = ()=>{
        if (onClick) {
            onClick();
          }
    }
  return (
    <button style={style} className="rounded-button" onClick={handleClick}>
      {children}
    </button>
  )
}
