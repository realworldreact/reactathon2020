import React from 'react'
import Divider from '../Divider'
import SpeakerGrid from './Grid'
import SpeakerBanner from './Banner'
import MasterOfCeremonies from './MasterOfCeremonies'
import IMAGE_MAP from './image-map'
import headerData from '../../assets/data/Speakers/header.json'
import speakerData from '../../assets/data/Speakers/speakers.json'
import './index.css'

const SpeakersSection = ({header, description, speakers, mc}) => (
  <section className="section-speakers">
    <SpeakerBanner title={header} description={description} />
    <section className="section-content section-speakers-content">
      <SpeakerGrid speakers={speakers} />
      <MasterOfCeremonies speaker={mc} />
    </section>
    <Divider className="speaker-bottom" />
  </section>
)
const Speakers = ({header, description, speakers, mc}) => (
  <SpeakersSection
    header={header}
    description={description}
    speakers={speakers}
    mc={mc}
  />
)

const mapSpeakerData = (speaker) => ({
  ...speaker,
  headline: speaker.title,
  twitterUrl: speaker.twitter,
  githubUrl: speaker.github,
  imgAlt: speaker.name.toLowerCase(),
  imgSrc:
    IMAGE_MAP[
      speaker.name
        .toLowerCase()
        .split(' ')
        .join('-')
    ],
})

Speakers.defaultProps = {
  header: headerData.title,
  description: headerData.description,
  mc:
    speakerData && speakerData.length > 0
      ? speakerData[1].mc && speakerData[1].mc.length > 0
        ? [
            mapSpeakerData(speakerData[1].mc[0]),
            mapSpeakerData(speakerData[1].mc[1]),
          ]
        : null
      : null,
  speakers:
    speakerData && speakerData.length > 0
      ? speakerData[0].speakers.map((speaker) => mapSpeakerData(speaker))
      : [],
}

export default Speakers
