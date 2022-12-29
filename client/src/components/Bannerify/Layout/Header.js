import React from 'react'
import classes from './Header.module.css'
import logo from '../../../images/Bannerify/B.png'

export default function Header() {
  return (
    <header className={classes.header}>
        <div className={classes.LogoArea}>
            <div className={classes.Logo}>
                <img src={logo} alt='Bannerify'/>
            </div>
            <div className={classes.LogoName}>Bannerify</div>
        </div>
    </header>
  )
}

