import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'
import styles from './speakers.module.css'
import frontendHappyHourSpeakers from './frontendHappyHourSpeakers.json'
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
    "name": "Jana Beck",
    "title": "Data Visualization Engineer",
    "company": "Stitch Fix",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "jana"
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
    "name": "Wes Bos",
    "title": "Engineer & Entrepreneur",
    "company": "WesBos.com and Syntax.fm",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "wes"
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
    "name": "Chris Biscardi",
    "title": "Software Engineer",
    "company": "Independent Consultant",
    "twitter": "https://www.twitter.com/ryan",
    "github": "https://www.github.com/ryan",
    "imgSlug": "chris"
  },
];


class Speaker extends Component {
  render() {
    const { name, title, company, twitter, github, imgSlug, width = 250 } = this.props
    const primaryImgSrc = require(`./images/speaker-${imgSlug}.png`)
    const secondaryImgSrc = require(`./images/speaker-${imgSlug}.png`)

    return (
      <div style={{ textAlign: 'center', width }} className={styles.speakerContainer}>
          <div style={{ position: 'relative', height: 188 }}>
            <MediaQuery minDeviceWidth={1224}>
              <img
                src={secondaryImgSrc}
                alt={`${name}`}
                className={styles.speakerImage}
              />
            </MediaQuery>
          </div>
        <div className={styles.speakerInfoContainer}>
            <h2 className={styles.speakerName}>{name}</h2>
            <div className={styles.speakerInfoSubContainer}>
            <h3 style={{ color: '#535353' }}>{title}</h3>
            <h3 style={{ color: '#535353' }}>{company}</h3>
            </div>
            <div
              style={{ display: 'inline-grid', justifyContent: 'left', marginTop: 12 }}
            >
              <a href={twitter} style={{ width: 40 }} target="_blank">
                <img src={twitterIcon} alt="Twitter icon" style={{ width: 24 }} />
              </a> Twitter
              <a href={github} style={{ width: 40 }} target="_blank">
                <img src={gitHubIcon} alt="GitHub icon" style={{ width: 24 }} />
              </a> Github
            </div>
        </div>
      </div>
    )
  }
}

const Speakers = () => (
  <section style={{ marginTop: 50 }} className={styles.speakersContainer}>
    <h1 style={{ marginBottom: 50 }} className={styles.sectionHeader}>Speakers.</h1>
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
      className={styles.speakerImageContainer}
    >
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
    <h3 className={styles.viewAllSpeakers}>View all Speakers -></h3>
  </section>
)

export default Speakers
