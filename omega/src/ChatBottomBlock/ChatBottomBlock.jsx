import React from 'react'
import classes from './ChatBottomBlock.module.css'


export const ChatBottomBlock = () => {
  return (
    <div className={classes.bottomBlock}>
        <div className={classes.profile}></div>
        <div className={classes.lines}>
            <div className={classes.topLine}></div>
            <div className={classes.bottomLine}></div>
        </div>
    </div>
  )
}
