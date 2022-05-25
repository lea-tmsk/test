import React from 'react'
import classes from './StatisticsBlock.module.css'

export const StatisticsBlock = () => {
    return (
    <div className={classes.block}>
        <div className={classes.top}>
            <div className={classes.topText}>Онлайн статистика</div>
            <div className={classes.dots}>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
            </div> 
        </div>
        <div className={classes.rating}>
            <div className={classes.text}>
                <div className={classes.topLine}>37%</div>
                <div className={classes.bottomLine}>Общий рейтинг</div>
            </div>
            <svg width="80" height="23" viewBox="0 0 80 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22.5C1 22.5 24.8597 -3.44176 41 3C48.9547 6.1748 48.5286 16.7383 57 18C67.7392 19.5994 79 1 79 1" stroke="#00E5CC"/>
            </svg>
        </div>
        <div className={classes.tasks}>
            <div className={classes.text}>
                <div className={classes.topLine}>165</div>
                <div className={classes.bottomLine}>Выполнено заданий</div>
            </div>
            <svg width="83" height="29" viewBox="0 0 83 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22.104C1 22.104 15.1114 -0.722438 28.5 1.10404C41.5832 2.88886 36.316 28.3372 49.5 27.604C60.963 26.9666 57.5306 5.09543 69 5.60404C74.586 5.85175 82 11.604 82 11.604" stroke="#00E5CC"/>
            </svg>
        </div>
    </div>
    )
}
