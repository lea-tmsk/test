import React from 'react'
import classes from './PlayButtonSvg.module.css'

export const PlayButtonSvg = ({color}) => {
  return (
    <svg className={classes.play} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301996 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill={color}/>
    </svg>
  )
}
