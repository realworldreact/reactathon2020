import React from 'react'
import styles from './sponsors.module.css'
import githubLogo from './github@2x.png'
import microsoftLogo from './microsoft@2x.png'
import dockerLogo from './docker@3x.png'
import medidataLogo from './medidata@3x.png'
import netflixLogo from './netflix@3x.png'

const SponsorImage = ({ name, imgSrc, style }) => (
  <img
    src={imgSrc}
    alt={`${name} logo`}
    className={styles['sponsor-logo']}
    style={style}
  />
)

const Sponsors = () => (
  <section style={{ marginTop: 50, marginBottom: 100 }}>
    <h1 style={{ marginBottom: 100 }}>Sponsors</h1>
    <div style={{ marginBottom: 25 }}>
      <SponsorImage name="GitHub" imgSrc={githubLogo} />
      <SponsorImage name="Microsoft" imgSrc={microsoftLogo} />
    </div>
    <div>
      <SponsorImage name="Docker" imgSrc={dockerLogo} />
      <SponsorImage name="Medidata" imgSrc={medidataLogo} />
      <SponsorImage name="Netflix" imgSrc={netflixLogo} />
    </div>
  </section>
)

export default Sponsors
