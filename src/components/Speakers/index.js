import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import styles from './speakers.module.css'
import gitHubIcon from './github.svg'
import twitterIcon from './twitter.svg'

let speakers = [
  {
    "name": "Ryan Florence",
    "title": "Co-Founder",
    "company": "React Training",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "ryan"
  },
  {
    "name": "Cassidy Williams",
    "title": "Engineer & Instructor",
    "company": "React Training",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "cassidy"
  },
  {
    "name": "Tejas Kumar",
    "title": "Software Engineer",
    "company": "",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "tejas"
  },
  {
    "name": "Jana Beck",
    "title": "Data Visualization Engineer",
    "company": "Stitch Fix",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "jana"
  },
  {
    "name": "Wes Bos",
    "title": "Engineer & Entrepreneur",
    "company": "WesBos.com and Syntax.fm",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "wes"
  },
  {
    "name": "Chris Biscardi",
    "title": "Software Engineer",
    "company": "Independent Consultant",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "chris"
  },
];


function Speaker(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { name, title, company, twitter, github, imgSlug, width = 250 } = props;
  const primaryImgSrc = require(`./images/speaker-${imgSlug}.png`)
  // const secondaryImgSrc = require(`./images/speaker-${imgSlug}.png`)

    return (
      <div style={{ textAlign: 'center', width }} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={styles.speakerContainer}>
          <div style={{ position: 'relative', height: 188 }}>
            <MediaQuery minDeviceWidth={1224}>
              <img
                src={primaryImgSrc}
                alt={`${name}`}
                className={hovered ? styles.speakerImageHover : styles.speakerImage}
              />
            </MediaQuery>
          </div>
        <div className={styles.speakerInfoContainer}>
            <p className={hovered ? styles.speakerNameHover : styles.speakerName} id="speaker-name">{name}</p>
            <div className={styles.speakerInfoSubContainer}>
            <p className={styles.speakerTitle}>{title}</p>
            <p className={styles.speakerCompany}>{company}</p>
            </div>
            <div className={styles.speakerSocialContainer}>
              <a href={twitter} style={{ width: 80, textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} className={styles.speakerLink} alt="Twitter icon" style={{ width: 24, float: 'left', marginRight: 10, filter: 'invert(42%) sepia(0%) saturate(1150%) hue-rotate(142deg) brightness(106%) contrast(91%)'}} />
                <p className={styles.speakerLinkText}>Twitter</p>
              </a>
              <a href={github} style={{ width: 80, textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                <img src={gitHubIcon} alt="GitHub icon" style={{ width: 24, float: 'left', marginRight: 10, filter: 'invert(42%) sepia(0%) saturate(1150%) hue-rotate(142deg) brightness(106%) contrast(91%)' }} />
                <p className={styles.speakerLinkText}>Github</p>
              </a>
            </div>
        </div>
      </div>
    )
  }

const Speakers = () => (
  <section style={{ marginTop: 50 }} className={styles.speakersContainer}>
    <h1 style={{ marginBottom: 50 }} className={styles.sectionHeader}>Speakers<font style={{color: '#36A7EE'}}>.</font></h1>
    <div className={styles.speakerImageContainer}>
      {speakers.map(({ name, title, company, twitter, github, imgSlug }, i) => (
        <Speaker
          key={`speaker-${i}`}
          name={name}
          title={title}
          company={company}
          twitter={twitter}
          github={github}
          imgSlug={imgSlug}
        />
      ))}
    </div>
    <p className={styles.viewAllSpeakers}>View all Speakers —></p>
  </section>
)

export default Speakers
