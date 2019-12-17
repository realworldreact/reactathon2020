import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import fbLogo from './footer-fb.svg'
import emailLogo from './footer-email.svg'
import meetupLogo from './footer-meetup.svg'
import twitterLogo from './footer-twitter.svg'
import youtubeLogo from './footer-youtube.svg'
import EmailSignup from '../EmailSignup'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.sectionLeft}>
        <h1 className={styles.sectionHeader}>GET IN TOUCH</h1>
        <div className={styles.footerLogoContainer}>
            <img src={fbLogo} className={styles.footerLogo}/>
            <img src={twitterLogo} className={styles.footerLogo}/>
            <img src={meetupLogo} className={styles.footerLogo}/>
            <img src={emailLogo} className={styles.footerLogo}/>
            <img src={youtubeLogo} className={styles.footerLogo}/>
        </div>
        <div className={styles.newsletterContainer}>
            <h3 className={styles.emailCaptureDescription}>Stay up to date with our (non-spammy) newsletter.</h3>
            <input type="text" className={styles.emailCaptureInput}/>
            <button className={styles.subscribeButton}>Subscribe</button>
        </div>
    </div>
    <div className={styles.sectionRight}>
        <h1 className={styles.sectionHeader}>SITEMAP</h1>
        <div className={styles.footerLinkContainer}>
            <p className={styles.footerLink}>Schedule</p>
            <p className={styles.footerLink}>Workshops</p>
            <p className={styles.footerLink}>Jobs</p>
            <p className={styles.footerLink}>Venue</p>
            <p className={styles.footerLink}>Hackathon</p>
            <p className={styles.footerLink}>Code of Conduct</p>
            <p className={styles.footerLink}>Volunteers</p>
            <p className={styles.footerLink}>Become a Sponsor</p>
        </div>
    </div>
  </footer>
)

export default Footer
