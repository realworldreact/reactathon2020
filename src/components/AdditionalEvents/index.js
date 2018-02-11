import React from 'react'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'
import styles from './index.module.css'
import workshopsIcon from '../../assets/icons/workshops-icon@3x.png'
import hackathonIcon from '../../assets/icons/hackathon-icon@3x.png'
import hiringMixerIcon from '../../assets/icons/hiring-mixer@3x.png'

const data = [
  {
    title: 'Workshops',
    imgSrc: workshopsIcon,
    description:
      '5 full-day workshops from industry leaders and core contributors',
    to: '/workshops',
  },
  {
    title: 'Hackathon',
    imgSrc: hackathonIcon,
    description:
      '2-day non-sleepover hackathon to learn, compete, and grow together',
    to: '/hackathon',
  },
  {
    title: 'Hiring Mixer',
    imgSrc: hiringMixerIcon,
    description:
      'Meet the top companies in the SF Bay who use React and are looking for engineers like you',
    to: '/hiring-mixer',
  },
]
const LearnMoreLink = ({ to }) => (
  <Link
    to={to}
    className="btn"
    style={{
      display: 'block',
      textDecoration: 'none',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 15,
    }}
  >
    Learn More
  </Link>
)

const AdditionalEvents = () => (
  <section
    id="additional-events"
    style={{
      marginTop: 50,
      marginBottom: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 750,
    }}
  >
    <h1 style={{ marginBottom: 35 }}>Additional Events</h1>
    <div className={styles['info-block-container']}>
      {data.map(({ title, imgSrc, description, to }, i) => (
        <Fade key={`event-${i}`} bottom>
          <div className={styles['info-block']}>
            <img
              src={imgSrc}
              alt={`${title.toLowerCase()} icon`}
              className="icon"
            />
            <h1 className={styles['additional-events-icons']}>{title}</h1>
            <p>{description}</p>
            <Fade delay={500}>
              <div className={styles['button-padding']}>
                <LearnMoreLink to={to} />
              </div>
            </Fade>
          </div>
        </Fade>
      ))}
    </div>
  </section>
)

export default AdditionalEvents
