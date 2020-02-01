import React from 'react'
import Speaker from '../Speaker'
import './index.css'

const SpeakerGrid = ({ speakers }) => (
  <div className='speaker-grid-parent'>
    <div className='speaker-grid'>
      {speakers.map((speaker, idx) => (
        <Speaker
          id={idx}
          key={idx}
          imgSrc={speaker.imgSrc}
          imgAlt={speaker.imgAlt}
          name={speaker.name}
          headline={speaker.headline}
          company={speaker.company}
          twitterUrl={speaker.twitterUrl}
          githubUrl={speaker.githubUrl}
        />
      ))}
    </div>
  </div>
)

SpeakerGrid.defaultProps = {
  speakers: []
}


export default SpeakerGrid
