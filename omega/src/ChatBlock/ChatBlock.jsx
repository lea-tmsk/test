import React from 'react'
import { ChatBottomBlock } from '../ChatBottomBlock/ChatBottomBlock'
import classes from './ChatBlock.module.css'
import profile from '../images/profilePic3.png'

export const ChatBlock = () => {
    return (
        <div className={classes.block}>
            <div className={classes.top}>
                <div className={classes.topText}>Чат студентов</div>
                <div className={classes.dots}>
                    <div className={classes.dot}></div>
                    <div className={classes.dot}></div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.bottomBlock}>
                    <img className={classes.profile} src={profile} alt='' />
                    <div className={classes.lines}>
                        <div className={classes.topLine}></div>
                        <div className={classes.bottomLine}></div>
                    </div>
                </div>
                <div className={classes.middle}>
                    <ChatBottomBlock />
                </div>
                <ChatBottomBlock />
            </div>
        </div>
    )
}

