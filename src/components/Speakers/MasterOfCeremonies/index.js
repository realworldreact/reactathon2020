import React from 'react'
import Speaker from '../Speaker'
import './index.css'

const MasterOfCeremonies = ({ speaker }) => {
  console.log('speakermoc', speaker)
  return (
    <div className='speaker-moc'>
      <div>
        <h2>Master of Ceremonies</h2>
        <Speaker
          imgSrc={speaker.imgSrc}
          imgAlt={speaker.imgAlt}
          name={speaker.name}
          headline={speaker.headline}
          company={speaker.company}
          twitterUrl={speaker.twitterUrl}
          githubUrl={speaker.githubUrl}
        />
      </div>
    </div>
  )
}

export default MasterOfCeremonies
