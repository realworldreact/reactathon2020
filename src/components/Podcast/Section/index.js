import React from 'react'
import sectionData from '../../../assets/data/podcast/content.json'
import PodcastPlayer from '../../PodcastPlayer'
import './index.css'

const PodcastSpeaker = ({ speaker }) => (
  <div className='podcast-item-speaker'>
    <div className='podcast-item-speaker-img-wrap'>
      <img src={speaker.img} alt={speaker.name.split(' ').join('-')} />
    </div>
    <div className='podcast-item-speaker-details'>
      <h2 className='podcast-item-speaker-details-name'>{speaker.name}</h2>
      <span className='podcast-item-speaker-details-title'>{speaker.title}</span>
      <span className='podcast-item-speaker-details-company'>{speaker.company}</span>
    </div>
  </div>
)

const PodcastItem = ({ speaker, src, type }) => (
  <div className='podcast-item'>
    <PodcastSpeaker speaker={speaker} />
    <PodcastPlayer src={src} type={type} />
  </div>
)

const Podcasts = ({ podcasts }) => (
  <div className='podcast-grid'>
    {podcasts.map((podcast, idx) => (
      <PodcastItem
        key={idx}
        src={podcast.src}
        type={podcast.type}
        speaker={podcast.speaker}
      />
    ))}
  </div>
)

const PodcastSection = ({ title, subtext, podcasts = [] }) => (
  <div className='podcast-section-content'>
    <h2 className='podcast-section-content-title'>
      {title}
    </h2>
    <div className='podcast-section-content-subtext'>
      {subtext}
    </div>
    <div>
      <Podcasts
        podcasts={podcasts}
      />
    </div>
  </div>
)

PodcastSection.defaultProps = {
  title: sectionData.sectionTitle,
  subtext: sectionData.sectionSubtext,
  podcasts: [{
    speaker: { name: 'GR', title: 'title', company: 'company', img: 'abc' },
    src: null
  }]
}

export default PodcastSection
