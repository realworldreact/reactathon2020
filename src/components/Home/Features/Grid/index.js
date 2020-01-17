import React from 'react'
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
        <a href={ctaUrl} className='btn-primary'>Learn more</a>
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
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    title: 'Topic Tables',
    description: `
      Informal sessions to get up close and personal with speakers, workshop
      instructors and other experts on a specific subject.
    `,
    imgSrc: TopicTablesIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    title: 'Conference Talks',
    description: `
      Two days of talks heavy on content, applicability, and orignality. 
      With over 15 speakers discussing a variety of subjects, you're sure
      to learn many things to implement back at the office.
    `,
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    title: 'Ask the React Team',
    description: `
      Ask the React Team
    `,
    imgSrc: AskReactTeamIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    title: 'Hiring Mixer',
    description: `
      test
    `,
    imgSrc: HiringMixerIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    title: 'Workshops',
    description: `
      test
    `,
    imgSrc: WorkshopsIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }]
}

export default FeaturesGrid
