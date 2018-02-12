import React from 'react'
import styles from './sponsors.module.css'
import githubLogo from './github@2x.png'
import microsoftLogo from './microsoft@2x.png'
import dockerLogo from './docker@3x.png'
import medidataLogo from './medidata@3x.png'
import netflixLogo from './netflix@3x.png'

const SponsorImage = ({ name, url, imgSrc, style }) => (
  <a href={url} target="_blank">
    <img
      src={imgSrc}
      alt={`${name} logo`}
      className={styles['sponsor-logo']}
      style={style}
    />
  </a>
)

const Sponsors = () => (
  <section style={{ marginTop: 50, marginBottom: 100 }}>
    <h1 style={{ marginBottom: 100 }}>Sponsors</h1>
    <div style={{ marginBottom: 25 }}>
      <SponsorImage
        name="GitHub"
        url="https://github.com/about/careers"
        imgSrc={githubLogo}
        target="_blank"
      />
      <SponsorImage
        name="Microsoft"
        url="https://careers.microsoft.com"
        imgSrc={microsoftLogo}
        target="_blank"
      />
    </div>
    <div>
      <SponsorImage
        name="Docker"
        url="https://www.docker.com/careers"
        imgSrc={dockerLogo}
        target="_blank"
      />
      <SponsorImage
        name="Medidata"
        url="https://www.mdsol.com/en/careers"
        imgSrc={medidataLogo}
        target="_blank"
      />
      <SponsorImage
        name="Netflix"
        url="https://jobs.netflix.com/"
        imgSrc={netflixLogo}
        target="_blank"
      />
    </div>
  </section>
)

export default Sponsors
