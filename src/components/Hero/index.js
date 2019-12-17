import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './index.module.css'
import HeroImage from './Hero.png'
import FlexportLogo from './header-flexport-logo.svg'
import RWRLogo from './header-rwr-logo.svg'

const Hero = () => (
  <section className="hero" style={{ height: 545, marginTop: 50, marginBottom: 30, backgroundImage: `url(${HeroImage})`}}>
    <h1 className={styles.heroHeaderText}>The San Francisco React Conference</h1>
    <p className={styles.heroHeaderSubtext}>
      Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.
    </p>
    <button className={styles.heroBuyButton}>Buy Tickets</button>
    <p className={styles.heroBottomLineText}>
    Presented by <img src={RWRLogo}/> & <img src={FlexportLogo}/>
    </p>
  </section>
)

export default Hero
