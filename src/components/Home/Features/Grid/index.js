import React from 'react'
import WelcomeReceptionIcon from '../../../../assets/icons/home/features-icon-reception.svg'
import TopicTablesIcon from '../../../../assets/icons/home/features-icon-topic-tables.svg'
import ConferenceTalksIcon from '../../../../assets/icons/home/features-icon-talks.svg'
import AskReactTeamIcon from '../../../../assets/icons/home/features-icon-ask-react-team.svg'
import HiringMixerIcon from '../../../../assets/icons/home/features-icon-hiring-mixer.svg'
import WorkshopsIcon from '../../../../assets/icons/home/features-icon-workshops.svg'
import './index.css'

const FeatureGridItem = ({ className, imgSrc, imgAlt, title, description, ctaUrl }) => (
  <div class={`feature ${className}`}>
    <img src={imgSrc} alt={imgAlt} />
    <div class='feature-copy'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <a href={ctaUrl} class='btn-primary'>Learn more</a>
      </p>
    </div>
  </div>
)

const FeaturesGrid = ({ features }) => (
  <div class='features-grid'>
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
    description: 'wE',
    title: 'Welcome Reception',
    imgSrc: WelcomeReceptionIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'Topic Tables',
    imgSrc: TopicTablesIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'Conference Talks',
    title: 'Conference Talks',
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'Ask the React Team',
    title: 'Ask the React Team',
    imgSrc: AskReactTeamIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'Hiring Mixer',
    imgSrc: HiringMixerIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }, {
    description: 'test',
    title: 'Workshops',
    imgSrc: WorkshopsIcon,
    imgAlt: 'test',
    ctaUrl: 'test'
  }]
}

export default FeaturesGrid
