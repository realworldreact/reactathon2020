import React from 'react'
import Link from 'gatsby-link'
import styles from './bigHeader.module.css'
import whiteLogo from './splash-logo@3x.png'
import BuyTicketsButton from '../BuyTicketsButton'

const BigHeader = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/conference">Conference</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/hackathon">Hackathon</Link>
      <Link to="/hiring-mixer">Hiring Mixer</Link>
    </nav>
    <div className={styles['main-container']}>
      <img
        src={whiteLogo}
        alt="Reactathon white logo"
        className={styles.logo}
      />
      <h1 style={{ marginTop: 30, color: 'white' }}>March 20-22, 2018</h1>
      <h2 style={{ marginBottom: 25, color: 'white' }}>San Francisco</h2>
      <BuyTicketsButton />
    </div>
  </header>
)

export default BigHeader
