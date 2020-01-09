import React from 'react'
import styles from './sponsors.module.css'
import flexportLogo from './sponsor-flexport.svg'
import netflixLogo from './sponsor-netflix.svg'
import lendingClubLogo from './sponsor-lending-club.svg'

// const SponsorImage = ({ name, url, imgSrc, style }) => (
//   <a href={url} target="_blank">
//     <img
//       src={imgSrc}
//       alt={`${name} logo`}
//       className={styles['sponsor-logo']}
//       style={style}
//     />
//   </a>
// )

const Sponsors = () => (
  <section className={styles.sponsorSectionContainer} style={{ marginTop: 50, marginBottom: 200 }}>
  <h1 className={styles.sectionHeader} style={{ marginBottom: 35 }}>Sponsors<font style={{color: '#36A7EE'}}>.</font></h1>
    <div style={{ marginBottom: 25 }} className={styles.presentingSponsorSection}>
      <p className={styles.subsectionHeader}>Presenting Sponsor</p>
      <div className={styles.flexportLogoContainer}>
        <img src={flexportLogo} className={styles.flexportLogo} alt="Flexport"/>
      </div>
      <div className={styles.sponsorDescriptionContainer}>
        <p className={styles.sponsorDescription}>At Flexport, we’re building the technology that's simplifying global trade. We’re making it easier for organizations around the world to move their cargo from one place to another – and that takes a lot of JavaScript! If you’d like to help us out with that responsibility, check us out! We’re heavy React users.</p>
      </div>
    </div>
    <div style={{ marginBottom: 25 }} className={styles.silverSponsorSection}>
      <p className={styles.subsectionHeader}>Silver Sponsors</p>
      <div className={styles.lendingclubLogoContainer} style={{ marginTop: 35 }}>
        <img src={lendingClubLogo} alt="Lending Club"/>
      </div>
    </div>
    <div style={{ marginBottom: 25 }} className={styles.communitySponsorSection}>
      <p className={styles.subsectionHeader}>Community Sponsors</p>
      <div className={styles.netflixLogoContainer} style={{ marginTop: 35 }}>
        <img src={netflixLogo} alt="Netflix"/>
      </div>
    </div>
    <p className={styles.sponsorContactInfo}>Interested in sponsorship opportunities? <a href="/contact" target="_blank">Contact us today</a> to review the sponsorship guide.</p>
  </section>
)

export default Sponsors
