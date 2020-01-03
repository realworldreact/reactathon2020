import React from 'react'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade'
import styles from './index.module.css'
import workshopsIcon from '../../assets/icons/events-icon-workshops.svg'
import hiringMixerIcon from '../../assets/icons/events-icon-hiring-mixer.svg'
import receptionIcon from '../../assets/icons/events-icon-reception.svg'
import topicTablesIcon from '../../assets/icons/events-icon-topic-tables.svg'
import talksIcon from '../../assets/icons/events-icon-talks.svg'
import activitiesIcon from '../../assets/icons/events-icon-activities.svg'

const data = [
  {
    title: 'Welcome Reception',
    imgSrc: receptionIcon,
    description:
      'Mingle with other engineers, speakers, workshop instructors, and sponsors over food and drinks. Get insight from casual conversation or discuss a specific topic at the topic tables.',
    to: '/welcome',
  },
  {
    title: 'Topic Tables',
    imgSrc: topicTablesIcon,
    description:
      'Informal sessions to get up close and personal with speakers, workshop instructors, and other experts on a specific subject.',
    to: '/topic-tables',
  },
  {
    title: 'Conference Talks',
    imgSrc: talksIcon,
    description:
      "Two days of talks heavy on content, applicability, and originality. With over 12 speakers discussing a variety of subjects, you're sure to learn many things to implement back at the office.",
    to: '/conference-talks',
  },
{
    title: 'Conference Activities',
    imgSrc: activitiesIcon,
    description:
      'Plenty of activities for the social butterflies, introverts, and everyone in between. Talk or implement code, meet and discuss over lawn and board games, tour the city with new friends, and plenty more to be announced soon!',
    to: '/conference-activities',
},
{
    title: 'Hiring Mixer',
    imgSrc: hiringMixerIcon,
    description:
      "Looking for your next job? Or out to get your first? Come to the hiring mixer where you'll meet some of the Bay Area's hottest companies.",
    to: '/hiring-mixer',
},
{
    title: 'Workshops',
    imgSrc: workshopsIcon,
    description:
      "From 4 hour workshops on the basics to full-day workshop on advanced topics, you'll learn in hours what our instructors have mastered over years. ",
    to: '/workshops',
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
    <button className={styles.learnMoreButton}>Learn More
    </button>
  </Link>
)

const AdditionalEvents = () => (
  <section id="additional-events" className={styles.additionalEvents}>
    <h1 className={styles.sectionHeader} style={{ marginBottom: 35 }}>Events<font style={{color: '#36A7EE'}}>.</font></h1>
    <div className={styles.infoBlockContainer}>
      {data.map(({ title, imgSrc, description, to }, i) => (
          <div className={styles.infoBlock}>
            <img
              src={imgSrc}
              alt={`${title.toLowerCase()} icon`}
              className={styles.infoBlockIcon}
            />
            <p className={styles.infoBlockHeader}>{title}</p>
            <p className={styles.infoBlockDescription}>{description}</p>
            <LearnMoreLink to={to} />
          </div>
      ))}
    </div>
  </section>
)

export default AdditionalEvents
