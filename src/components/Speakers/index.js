import React from 'react'
import SpeakerGrid from './Grid'
import SpeakerBanner from './Banner'
import IMAGE_MAP from './image-map'
import headerData from '../../assets/data/Speakers/header.json.js'
import speakerData from '../../assets/data/Speakers/speakers.json.js'
import './index.css'

const SpeakersSection = ({ header, description, speakers }) => (
  <section className='section-speakers'>
    <SpeakerBanner title={header} description={description} />
    <section className='section-content section-speakers-content'>
      <SpeakerGrid speakers={speakers} />
      {/* <MasterOfCeremonies /> */}
      <hr className='section-divider' />
    </section>
  </section>
)
const Speakers = ({ header, description, speakers }) => (
  <SpeakersSection
    header={header}
    description={description}
    speakers={speakers}
  />
)

Speakers.defaultProps = {
  header: headerData.title,
  description: headerData.description,
  speakers: speakerData && speakerData.length > 0
    ? speakerData[0].speakers.map(speaker => ({
      ...speaker,
      headline: speaker.title,
      twitterUrl: speaker.twitter,
      githubUrl: speaker.github,
      imgAlt: speaker.name.toLowerCase,
      imgSrc: IMAGE_MAP[speaker.name.toLowerCase().split(' ').join('-')]
    }))
   : []
}

export default Speakers
