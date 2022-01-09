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

const FeatureGridItem = ({ id, className = '', imgSrc, imgAlt, title, description, ctaUrl, ctaText }) => (
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
          text={ctaText}
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
          ctaText={feature.ctaText}
        />
      ))}
  </div>
)

FeaturesGrid.defaultProps = {
  features: [{
    title: 'Welcome Reception & Keynote',
    description: `
      Mingle with other engineers, speakers, workshop instructors, and sponsors over food and drinks. Get insight from casual conversation or discuss a specific subject at the topic tables, & watch the opening keynnote!
    `,
    imgSrc: WelcomeReceptionIcon,
    imgAlt: 'Welcome Reception',
    ctaUrl: '/schedule',
    ctaText: 'See Full Schedule'
  }, {
    title: 'Topic Tables',
    description: `
      Easily identify the subjects that interest you, and get up close and personal with speakers, workshop instructors, and other industry professionals to chat about that topic.
    `,
    imgSrc: TopicTablesIcon,
    imgAlt: 'Topic Tables',
    ctaUrl: '/about/topic-tables',
    ctaText: 'Learn More'
  }, {
    title: 'Conference Talks',
    description: `
      Two and a half days of talks heavy on content, applicability, and originality on React, the extended ecosystem, & serverless/infra-as-code. With over 15 speakers discussing a variety of subjects, you're sure to learn many things to implement back at the day job.
    `,
    imgSrc: ConferenceTalksIcon,
    imgAlt: 'Conference Talks',
    ctaUrl: '/schedule',
    ctaText: 'See Full Schedule'
  }, {
    title: 'Unconference Icebreakers',
    description: `
      It's been a long time since we've met in person. Come to the venue early to chat about life, struggles, wins, losses, anxiety, and other human subjects. Let's empathize with & support one another!
    `,
    imgSrc: UnconferenceIcon,
    imgAlt: 'Unconference Sessions',
    ctaUrl: '/about/unconference-sessions',
    ctaText: 'Learn more'
  }, {
    title: 'Jobs',
    description: `
      Looking for your next job? Or out to get your first? Browse open job listings from some of the top tech companies in the world!
    `,
    imgSrc: HiringMixerIcon,
    imgAlt: 'Jobs',
    ctaUrl: '/about/jobs',
    ctaText: 'See Open Positions'
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
