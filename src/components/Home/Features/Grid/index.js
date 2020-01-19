import React from 'react'
import LineButton from '../../../LineButton'
import WelcomeReceptionIcon from '../../../../assets/icons/home/features-icon-reception.svg'
import TopicTablesIcon from '../../../../assets/icons/home/features-icon-topic-tables.svg'
import ConferenceTalksIcon from '../../../../assets/icons/home/features-icon-talks.svg'
import AskReactTeamIcon from '../../../../assets/icons/home/features-icon-ask-react-team.svg'
import HiringMixerIcon from '../../../../assets/icons/home/features-icon-hiring-mixer.svg'
import WorkshopsIcon from '../../../../assets/icons/home/features-icon-workshops.svg'
import './index.css'

const FeatureGridItem = ({ className = '', imgSrc, imgAlt, title, description, ctaUrl }) => (
  <div className={`feature ${className}`}>
    <img src={imgSrc} alt={imgAlt} />
    <div className='feature-copy'>
      <h2 className='feature-title'>
        {title}
      </h2>
      <p className='feature-description'>
        {description}
      </p>
      <p>
        <LineButton 
          className='feature-cta-btn'
          text='Learn more'
          href={ctaUrl}
        />
        {/* <a href={ctaUrl} className='feature-cta-btn'>
          Learn more
        </a> */}
      </p>
    </div>
  </div>
)

const FeaturesGrid = ({ features }) => (
  <div className='features-grid'>
      {features.map(feature => (
        <FeatureGridItem 
          imgSrc={feature.imgSrc}
          imgAlt={feature.imgAlt}
          title={feature.title}
          description={feature.description}
          ctaUrl={feature.ctaUrl}
        />
      ))}
  </div>
)

FeaturesGrid.defaultProps = {
  features: [{
    title: 'Welcome Reception',
    description: `
      Mingle with other engineers, speakers, workshop instructors, and sponsors 
      over food and drinks. Get insight from casual conversation or discuss a 
      specific subject at the topic tables.
    `,
    imgSrc: WelcomeReceptionIcon,
    imgAlt: 'welcome-reception',
    ctaUrl: '#'
  }, {
    title: 'Topic Tables',
    description: `
      Informal sessions to get up close and personal with speakers, workshop
      instructors and other experts on a specific subject.
    `,
    imgSrc: TopicTablesIcon,
    imgAlt: 'topic-tables',
    ctaUrl: '#'
  }, {
    title: 'Conference Talks',
    description: `
      Two days of talks heavy on content, applicability, and orignality. 
      With over 15 speakers discussing a variety of subjects, you're sure
      to learn many things to implement back at the office.
    `,
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'conference-talks',
    ctaUrl: '#'
  }, {
    title: 'Ask the React Team',
    description: `
      Joining us in the sponsor hall are a number of members from
      the React core team. You can learn from and interact with them, or just say hi.
    `,
    imgSrc: AskReactTeamIcon,
    imgAlt: 'ask-react-team',
    ctaUrl: '#'
  }, {
    title: 'Hiring Mixer',
    description: `
      Looking for your next job? Or out to get your first? Come to the hiring
      mixer where you'll meet some of the Bay Area's hottest companies.
    `,
    imgSrc: HiringMixerIcon,
    imgAlt: 'hiring-mixer',
    ctaUrl: '#'
  }, {
    title: 'Workshops',
    description: `
      From 4 hour workshops on the basics to full-day workshop on advanced topics
      , you'll learn in hours what our instructors have mastered over years.
    `,
    imgSrc: WorkshopsIcon,
    imgAlt: 'workshops',
    ctaUrl: '#'
  }]
}

export default FeaturesGrid
