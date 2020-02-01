import React from 'react'
import Link from '../../Link'
import { getSpeakerProfileUrl } from '../../../utils/speaker'
import Speaker from '../Speaker'
import IconGithub from '../../../assets/icons/home/icon-github.svg'
import IconTwitter from '../../../assets/icons/home/icon-twitter.svg'
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
