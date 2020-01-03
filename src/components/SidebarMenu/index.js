import React from 'react'
import Link from 'gatsby-link'
import styles from './sidebarMenu.module.css'
import reactathonNavLogo from './reactathon-nav-logo.svg'
const cassidyImg = require('../Speakers/images/speaker-cassidy.png')

const SidebarMenu = () => (
    <nav className={styles.nav}>
      <object type="image/svg+xml" data={reactathonNavLogo}>
        <img src="cassidyImg" alt="" />
      </object>
      <Link to="/"><p className={styles.sidebarText}>Home</p></Link>
      <hr className={styles.hr}/>
      <Link to="/speakers"><p className={styles.sidebarText}>Speakers</p></Link>
      <hr className={styles.hr}/>
      <Link to="/schedule"><p className={styles.sidebarText}>Schedule</p></Link>
      <hr className={styles.hr}/>
      <Link to="/workshops"><p className={styles.sidebarText}>Workshops</p></Link>
      <hr className={styles.hr}/>
      <Link to="/topic-tables"><p className={styles.sidebarText}>Topic Tables</p></Link>
      <hr className={styles.hr}/>
      <Link to="/venue"><p className={styles.sidebarText}>Venue & Hotel</p></Link>
      <hr className={styles.hr}/>
      <Link to="/hiring-mixer"><p className={styles.sidebarText}>Jobs & Hiring Mixer</p></Link>
      <hr className={styles.hr}/>
      <Link to="/about"><p className={styles.sidebarText}>About/FAQ</p></Link>
      <Link to="/buy-tickets" className={styles.buyTickets}><p className={styles.buyTicketsText}>Buy Tickets</p></Link>
    </nav>
)

export default SidebarMenu
