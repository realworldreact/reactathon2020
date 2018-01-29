import React from 'react'
import styles from './index.module.css'
import lyftLogo from '../../assets/sponsors/lyft@3x.png'
import githubLogo from '../../assets/sponsors/github@3x.png'
import netlifyLogo from '../../assets/sponsors/netlify@3x.png'
import opentableLogo from '../../assets/sponsors/opentable@3x.png'
import pinterestLogo from '../../assets/sponsors/pinterest@3x.png'
import eventbriteLogo from '../../assets/sponsors/eventbrite@3x.png'

const Sponsors = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Sponsors</h1>
    <p style={{ maxWidth: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      Join us during this exciting week of events and meet the brightest
      developers on the cutting edge of modern web and mobile development.
    </p>
    <a href="mailto:sponsors@reactathon.com?subject=Request for Sponsor Info">
      sponsors@reactathon.com
    </a>
    <p style={{ marginTop: 30 }}>Some of last year's sponsors</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <img src={lyftLogo} alt="lyft logo" className={styles['sponsor-logo']} />
      <img
        src={githubLogo}
        alt="github logo"
        className={styles['sponsor-logo']}
      />
      <img
        src={netlifyLogo}
        alt="netflify logo"
        className={styles['sponsor-logo']}
      />
      <img
        src={opentableLogo}
        alt="opentable logo"
        className={styles['sponsor-logo']}
      />
      <img
        src={pinterestLogo}
        alt="pinterest logo"
        className={styles['sponsor-logo']}
      />
      <img
        src={eventbriteLogo}
        alt="eventbrite logo"
        className={styles['sponsor-logo']}
      />
    </div>
  </section>
)

export default Sponsors
