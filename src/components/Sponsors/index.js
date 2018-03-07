import React from 'react'
import styles from './sponsors.module.css'
import githubLogo from './github@2x.png'
import microsoftLogo from './microsoft@2x.png'
import dockerLogo from './docker@3x.png'
import medidataLogo from './medidata@3x.png'
import netflixLogo from './netflix@3x.png'
import eventbriteLogo from './eventbrite@3x.png'
import netlifyLogo from './netlify@3x.png'
import flexportLogo from './flexport@3x.svg'
import zumperLogo from './zumper@3x.png'
import hasuraLogo from './hasura.svg'
import eazeLogo from './eaze.png'
import nyentekLogo from './nyentek.png'

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
        name="Eventbrite"
        url="https://www.eventbrite.com/careers/"
        imgSrc={eventbriteLogo}
        target="_blank"
        style={{ height: 60, padding: '8px 0', margin: '25px 50px' }}
      />
      <SponsorImage
        name="Netlify"
        url="https://www.netlify.com/careers/"
        imgSrc={netlifyLogo}
        target="_blank"
        style={{ height: 63, margin: '20px 50px' }}
      />
    </div>
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
        name="Zumper"
        url="https://www.zumper.com/jobs"
        imgSrc={zumperLogo}
        target="_blank"
      />
      <SponsorImage
        name="Flexport"
        url="https://www.flexport.com/careers"
        imgSrc={flexportLogo}
        target="_blank"
        style={{ height: 26, margin: '30px 50px' }}
      />
      <SponsorImage
        name="Hasura"
        url="https://hasura.io/"
        imgSrc={hasuraLogo}
        target="_blank"
        style={{ height: 34, margin: '26px 30px' }}
      />
      <SponsorImage
        name="Medidata"
        url="https://www.mdsol.com/en/careers"
        imgSrc={medidataLogo}
        target="_blank"
      />
      <SponsorImage
        name="Eaze"
        url="https://www.eaze.com/careers"
        imgSrc={eazeLogo}
        target="_blank"
        style={{ height: 33, margin: '23px 42px' }}
      />

      <SponsorImage
        name="Nyentek"
        url="http://www.nyentek.com"
        imgSrc={nyentekLogo}
        target="_blank"
        style={{ margin: '20px 42px' }}
      />
      <SponsorImage
        name="Docker"
        url="https://www.docker.com/careers"
        imgSrc={dockerLogo}
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
