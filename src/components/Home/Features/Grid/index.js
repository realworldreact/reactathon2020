import React from 'react'
import LineButton from '../../../LineButton'
import WelcomeReceptionIcon from '../../../../assets/icons/home/features-icon-reception.svg'
import TopicTablesIcon from '../../../../assets/icons/home/features-icon-topic-tables.svg'
import ConferenceTalksIcon from '../../../../assets/icons/home/features-icon-talks.svg'
import UnconferenceIcon from '../../../../assets/icons/home/features-icon-unconference.svg'
// import AskReactTeamIcon from '../../../../assets/icons/home/features-icon-ask-react-team.svg'
import HiringMixerIcon from '../../../../assets/icons/home/features-icon-hiring-mixer.svg'
import WorkshopsIcon from '../../../../assets/icons/home/features-icon-workshops.svg'
import './index.css'

const FeatureGridItem = ({ id, className = '', imgSrc, imgAlt, title, description, ctaUrl }) => (
  <div key={id} className={`feature ${className}`}>
    <div className='feature-img-wrap'>
      <img className='feature-img' src={imgSrc} alt={imgAlt} />
    </div>
    <div className='feature-copy'>
      <h2 className='feature-title'>
        {title}
      </h2>
      <p className='feature-description'>
        {description}
      </p>
      <p>
        <LineButton
          isExternalLink={false}
          className='feature-cta-btn'
          text='Learn more'
          href={ctaUrl}
        />
      </p>
    </div>
  </div>
)

const FeaturesGrid = ({ features }) => (
  <div className='features-grid'>
      {features.map((feature, idx) => (
        <FeatureGridItem
          key={idx}
          id={idx}
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
      Mingle with other engineers, speakers, workshop instructors, and sponsors over food and drinks. Get insight from casual conversation or discuss a specific subject at the topic tables.
    `,
    imgSrc: WelcomeReceptionIcon,
    imgAlt: 'Welcome Reception',
    ctaUrl: '/welcome-reception',
    ctaText: 'Learn more'
  }, {
    title: 'Topic Tables',
    description: `
      Informal sessions to get up close and personal with speakers, workshop instructors, and other experts on a specific subject.
    `,
    imgSrc: TopicTablesIcon,
    imgAlt: 'Topic Tables',
    ctaUrl: '/topic-tables',
    ctaText: 'See Full Schedule'
  }, {
    title: 'Conference Talks',
    description: `
      Two days of talks heavy on content, applicability, and originality. With over 12 speakers discussing a variety of subjects, you're sure to learn many things to implement back at the office.
    `,
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'Conference Talks',
    ctaUrl: '/conference-talks',
    ctaText: 'Learn more'
  }, {
    title: 'Unconference Sessions',
    description: `
      The morning of Day 1 features unconference sessions & topic tables designed to facilitate & share your experience from the past 2 years with other engineers.
    `,
    imgSrc: UnconferenceIcon,
    imgAlt: 'Unconference Sessions',
    ctaUrl: '/unconference-sessions',
    ctaText: 'Learn more'
  }, {
    title: 'Jobs',
    description: `
      Looking for your next job? Or out to get your first? Browse our job listings from some of the top tech companies in the world!
    `,
    imgSrc: HiringMixerIcon,
    imgAlt: 'Jobs',
    ctaUrl: '/jobs',
    ctaText: 'Learn more'
  }, {
    title: 'Workshops',
    description: `
      From 4 hour workshops on the basics to full-day workshop on advanced topics, you'll learn in hours what our instructors have mastered over years.
    `,
    imgSrc: WorkshopsIcon,
    imgAlt: 'Workshops',
    ctaUrl: '/workshops',
    ctaText: 'Learn more'
  }]
}

export default FeaturesGrid
