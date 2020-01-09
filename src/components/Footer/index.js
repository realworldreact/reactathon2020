import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import fbLogo from './footer-fb.svg'
import emailLogo from './footer-email.svg'
import meetupLogo from './footer-meetup.svg'
import twitterLogo from './footer-twitter.svg'
import youtubeLogo from './footer-youtube.svg'

const fbLink = "https://facebook.com"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.sectionLeft}>
        <h1 className={styles.sectionHeader}>Get In Touch</h1>
        <hr className={styles.sectionHr}/>
        <div className={styles.footerLogoContainer}>
            <Link to={fbLink}><img src={fbLogo} className={styles.footerLogo} alt="Facebook"/></Link>
            <img src={twitterLogo} className={styles.footerLogo} alt="Twitter"/>
            <img src={meetupLogo} className={styles.footerLogo} alt="Meetup"/>
            <img src={emailLogo} className={styles.footerLogo} alt="Email"/>
            <img src={youtubeLogo} className={styles.footerLogo} alt="YouTube"/>
        </div>
        <div className={styles.newsletterContainer}>
            <h3 className={styles.emailCaptureDescription}>Stay up to date with our (non-spammy) newsletter.</h3>
            <input type="text" placeholder="Your Email" className={styles.emailCaptureInput}/>
            <button className={styles.subscribeButton}>Subscribe</button>
        </div>
    </div>
    <div className={styles.sectionRight}>
        <h1 className={styles.sectionHeader}>SITEMAP</h1>
        <hr className={styles.sectionHr2}/>
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
