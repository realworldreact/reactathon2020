import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './index.module.css'
import HeroImage from './Hero.png'
import FlexportLogo from './header-flexport-logo.svg'
import RWRLogo from './header-rwr-logo.svg'

const AboutHero = () => (
  <section className={styles.hero} style={{ height: 380, backgroundImage: `url(${HeroImage})`}}>
    <div className={styles.heroContent}>
    <h1 className={styles.heroHeaderText}>About<font style={{color: '#36A7EE'}}>.</font></h1>
    <p className={styles.heroHeaderSubtext}>
    Reactathon is your chance to connect with 600 like-minded engineers in the heart of San Francisco. Featuring the most up-to date, relevant, and advanced topics in the presentations, complemented by facilitiated discussion with speakers, workshop instructors, experts, and sponsors.
    </p>
    </div>
  </section>
)

export default AboutHero
