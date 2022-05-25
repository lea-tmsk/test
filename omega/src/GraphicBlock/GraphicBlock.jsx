import React from 'react'
import { SearchSvg } from '../SearchSvg/SearchSvg'
import classes from './GraphicBlock.module.css'
import profilePicture from '../images/manSearch.png'
import lady from '../images/ladyWithMarker.png'
import profile1 from '../images/profilePic1.png'
import profile2 from '../images/profilePic2.png'
import profile3 from '../images/profilePic3.png'

export const GraphicBlock = () => {
  return (
    <div className={classes.block}>
        <div className={classes.circles}>
            <div className={classes.redCircle}></div>
            <div className={classes.yellowCircle}></div>
            <div className={classes.greenCircle}></div>
        </div>
        <div className={classes.searchLine}>
            <div className={classes.search}>
                <SearchSvg />
            </div>
            <img className={classes.profilePic} src={profilePicture} alt='' />
        </div>
        <img className={classes.lady} src={lady} alt='' />
        <div className={classes.bottom}>
            <div className={classes.connected}>
                <img className={classes.profile1} src={profile1} alt='' />
                <img className={classes.profile2} src={profile2} alt='' />
                <img className={classes.profile3} src={profile3} alt='' />
                <div className={classes.other}>+12</div>
                <div className={classes.connectedText}>Подключены</div>
            </div>
            <div className={classes.unit}>
                <div className={classes.unitText}>Unit 32</div>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.29998 3.72916L5.58332 6.44582C5.26248 6.76666 4.73748 6.76666 4.41665 6.44582L1.69998 3.72916" stroke="#9090A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}
