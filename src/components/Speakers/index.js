import React from 'react'
import Divider from '../Divider'
import SpeakerGrid from './Grid'
import SpeakerBanner from './Banner'
import MasterOfCeremonies from './MasterOfCeremonies'
import SectionTitle from '../Home/SectionTitle'
import AboutSectionDateTime from "../About/Section/AboutSectionDateTime";
import speakersData from '../../assets/data/Speakers/speakers.json'
import speakersData1 from '../../assets/data/Speakers/speakers1.json'
import headerData from '../../assets/data/Speakers/header.json'
import IMAGE_MAP from './image-map'
import './index.css'

const SpeakersList = ({ speakers, title, date, gridBottomTitle }) => (<>
  <SectionTitle text={title} className='title-speakers' />
  <AboutSectionDateTime date={date} time="" className="speakers-time" />
  <SpeakerGrid speakers={speakers} />
  {gridBottomTitle && <p className="speakers-grid-bottom-title">{gridBottomTitle}</p>}
</>)

const SpeakersSection = ({ header, description, speakers, speakers1, mc }) => (
  <section className="section-speakers">
    <SpeakerBanner title={header} description={description} />
    <section className="section-content section-speakers-content">
      <SpeakersList
        speakers={speakers}
        title="Reactathon"
        date="May 3, 4"
        gridBottomTitle="More speakers to be announced!"
      />
      <SpeakersList
        speakers={speakers1}
        title="Serverless in the Park"
        date="May 5"
        gridBottomTitle=""
      />
      <MasterOfCeremonies speaker={mc} />
    </section>
    <Divider className="speaker-bottom" />
  </section>
)
/*
const Speakers = ({header, description, speakers, mc}) => (
  <SpeakersSection
    header={header}
    description={description}
    speakers={speakers}
    mc={mc}
  />
)
*/

const mapSpeakerData = (speaker) => {
  const imgSrcStr = speaker.name.toLowerCase().replace('.', '').split(' ').join('-')
  return {
    ...speaker,
    headline: speaker.title,
    twitterUrl: speaker.twitter,
    githubUrl: speaker.github,
    imgAlt: speaker.name.toLowerCase(),
    imgSrcAnime: IMAGE_MAP[`${imgSrcStr}-anime`],
    imgSrcStandard: IMAGE_MAP[`${imgSrcStr}-standard`],
    imgSrc:
      IMAGE_MAP[
        speaker.name
          .toLowerCase()
          .split(' ')
          .join('-')
      ]
  }
}

SpeakersSection.defaultProps = {
  header: headerData.title,
  description: headerData.description,
  mc:
    speakersData && speakersData.length > 0
      ? speakersData[1].mc && speakersData[1].mc.length > 0
        ? [
          mapSpeakerData(speakersData[1].mc[0])
          // mapSpeakerData(speakerData[1].mc[1]),
        ]
        : null
      : null,
  speakers:
    speakersData && speakersData.length > 0
      ? speakersData[0].speakers.map((speaker) => mapSpeakerData(speaker))
      : [],
  speakers1:
    speakersData1 && speakersData1.length > 0
      ? speakersData1[0].speakers.map((speaker) => mapSpeakerData(speaker))
      : []
}

export default SpeakersSection
