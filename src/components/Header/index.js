import React from 'react'
import styles from './header.module.css'
import whiteLogo from '../../assets/reactathon-logo-white.svg'

const Header = () => (
  <header className={styles.header}>
    <img src={whiteLogo} alt="Reactathon logo" className={styles.logo} />
    <nav className={styles.nav}>
      <a href="/#">Home</a>
      <a href="/#conference">Conference</a>
      <a href="/#additional-events">Workshops</a>
      <a href="/#additional-events">Hackathon</a>
      <a href="/#additional-events">Hiring Mixer</a>
    </nav>
  </header>
)

export default Header
