import React from 'react'
import { BurgerSvg } from '../BurgerSvg/BurgerSvg'
import { Logo } from '../Logo/Logo'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.logo}>
            <Logo />
        </div>
        <div className={classes.nav}>
            <button className={classes.active}>Главная</button>
            <button className={classes.btn}>Проекты</button>
            <button className={classes.btn}>СМИ о нас</button>
            <button className={classes.btn}>Партнеры</button>
            <button className={classes.btn}>Контакты</button>
        </div>
        <div className={classes.rightBtns}>
            <button className={classes.authorization}>Вход</button>
            <button className={classes.demoversion}>Демоверсия</button>
        </div>
        <button className={classes.burger}>
          <BurgerSvg/>
        </button>
    </div>
  )
}
