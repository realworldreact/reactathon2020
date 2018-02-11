import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import workshopsIcon from '../../assets/icons/workshops-icon@3x.png'
import hackathonIcon from '../../assets/icons/hackathon-icon@3x.png'
import hiringMixerIcon from '../../assets/icons/hiring-mixer@3x.png'

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
      <div className={styles['info-block']}>
        <img src={workshopsIcon} alt="workshops icon" className="icon" />
        <h1 className={styles['additional-events-icons']}>Workshops</h1>
        <p>5 full-day workshops from industry leaders and core contributors</p>
        <div className={styles['button-padding']}>
          <LearnMoreLink to="/workshops" />
        </div>
      </div>
      <div className={styles['info-block']}>
        <img src={hackathonIcon} alt="hackathon icon" className="icon" />
        <h1 className={styles['additional-events-icons']}>Hackathon</h1>
        <p>
          2-day non-sleepover hackathon to learn, compete, and grow together
        </p>
        <div className={styles['button-padding']}>
          <LearnMoreLink to="/hackathon" />
        </div>
      </div>
      <div className={styles['info-block']}>
        <img src={hiringMixerIcon} alt="hiring mixer icon" className="icon" />
        <h1 className={styles['additional-events-icons']}>Hiring Mixer</h1>
        <p>
          Meet the top companies in the SF Bay who use React and are looking for
          engineers like you
        </p>
        <div className={styles['button-padding']}>
          <LearnMoreLink to="/hiring-mixer" />
        </div>
      </div>
    </div>
  </section>
)

export default AdditionalEvents
