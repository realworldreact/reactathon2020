import React from 'react'
import Speaker from '../Speaker'
import './index.css'

const SpeakerGrid = ({ speakers, isWithAnimeImg = false }) => (
  <div className='speaker-grid-parent'>
    <div className='speaker-grid'>
      {speakers.map((speaker, idx) => (
        <Speaker
          id={idx}
          key={idx}
          isWithAnimeImg={isWithAnimeImg}
          imgSrcStandard={speaker.imgSrcStandard}
          imgSrcAnime={speaker.imgSrcAnime}
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
