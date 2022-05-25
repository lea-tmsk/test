import React from 'react'
import classes from './SmallPlaySvg.module.css'

export const SmallPlaySvg = ({color}) => {
  return (
    <div className={classes.play}>
        <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6727 4.9707C9.07855 5.20503 9.07855 5.79083 8.6727 6.02515L1.36726 10.243C0.9614 10.4773 0.454078 10.1844 0.454078 9.71573L0.454078 1.28013C0.454078 0.811487 0.9614 0.518585 1.36726 0.752907L8.6727 4.9707Z" fill={color}/>
        </svg>
    </div>
  )
}
