import React from 'react'
import LineButton from '../../../LineButton'
import WelcomeReceptionIcon from '../../../../assets/icons/home/features-icon-reception.svg'
import TopicTablesIcon from '../../../../assets/icons/home/features-icon-topic-tables.svg'
import ConferenceTalksIcon from '../../../../assets/icons/home/features-icon-talks.svg'
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
    title: 'Daily Mini Workshops',
    description: `
      Each day kicks off with a number of 2-hour workshops for you to 
      choose from. Included with the full-access ticket! Click to learn
      more about the featured workshops. 
    `,
    imgSrc: WorkshopsIcon,
    imgAlt: 'workshops',
    ctaUrl: '/workshops'
  }, {
    title: 'Conference Talks',
    description: `
      Three days of talks heavy on content, applicability, and orignality.
      With over 15 speakers discussing a variety of subjects, you're sure
      to learn many things to implement back at the office.
    `,
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'conference-talks',
    ctaUrl: '/schedule'
  }, {
    title: 'Sponsor Expo',
    description: `
      Our sponsors aren't just incredibly successful businesses -- they're
      also engineers on the cutting edge of web development. Mingle with the 
      engineers from our sponsor companies to learn how they are tackling 
      tough problems, and what interesting solutions they've come up with.
    `,
    imgSrc: WelcomeReceptionIcon,
    imgAlt: 'welcome-reception',
    ctaUrl: '/schedule'
  }, {
    title: 'Topic Tables',
    description: `
      Informal sessions to get up close and personal with speakers, workshop
      instructors and other experts on a specific subject. Topic Tables take 
      place each day and break up the morning & afternoon sessions. 
    `,
    imgSrc: TopicTablesIcon,
    imgAlt: 'topic-tables',
    ctaUrl: '/about/topic-tables'
  }, {
    title: 'Hiring Mixer',
    description: `
      Looking for your next job? Or out to get your first? Join our Remote
      Hiring Mixer and apply to a number of companies at once! 
    `,
    imgSrc: HiringMixerIcon,
    imgAlt: 'hiring-mixer',
    ctaUrl: '/about/jobs'
  }]
}

export default FeaturesGrid
