import React from 'react'
import { SmallPlaySvg } from '../SmallPlaySvg/SmallPlaySvg'
import classes from './ListeningBlock.module.css'

export const ListeningBlock = () => {
  return (
    <div className={classes.block}>
        <div className={classes.top}>
            <SmallPlaySvg color='#060640'/>
            <div className={classes.topText}>
                <div className={classes.listening}>Аудиторивание</div>
                <div className={classes.time}>1:45 мин</div>
            </div>
        </div>
        <div className={classes.other}>
            <div className={classes.otherText}>Другие файлы</div>
            <div className={classes.otherFiles}>
                <SmallPlaySvg color='#EDF6F3' />
                <div className={classes.lines}>
                    <div className={classes.topLine}></div>
                    <div className={classes.bottomLine}></div>
                </div>
            </div>
            <div className={classes.otherFiles}>
                <SmallPlaySvg color='#EDF6F3' />
                <div className={classes.lines}>
                    <div className={classes.topLine}></div>
                    <div className={classes.bottomLine}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
