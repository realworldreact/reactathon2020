import React from 'react'
import SectionTitle from '../SectionTitle'
import SpeakerGrid from '../../Speakers/Grid'
import data from '../../../assets/data/home/speakers.json'
import IMAGE_MAP from './image-map'
import './index.css'

const SpeakerSection = ({ speakers }) => (
  <section className='section-speakers'>
    <SectionTitle text='Speakers' className='title-speakers' />
    <SpeakerGrid speakers={speakers} />
  </section>
)

SpeakerSection.defaultProps = {
  speakers: data.map(speaker => ({
    ...speaker,
    headline: speaker.title,
    twitterUrl: speaker.twitter,
    githubUrl: speaker.github,
    imgAlt: speaker.name.toLowerCase,
    imgSrc: IMAGE_MAP[speaker.name.toLowerCase().split(' ').join('-')]
  }))
}

export default SpeakerSection
