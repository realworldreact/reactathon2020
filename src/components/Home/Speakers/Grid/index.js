import React from 'react'
import SpeakerRF from '../../../../assets/images/home/speakers/speaker-ryan.png'
import './index.css'

const Speaker = ({ className = '', imgSrc, imgAlt, name, headline, company, twitterUrl, githubUrl }) => (
  <div className={`speaker ${className}`}>
    <img className='speaker-img' src={imgSrc} alt={imgAlt} />
    <div className='speaker-description'>
      <h2 className='speaker-name'>
        {name}
      </h2>
      <span className='speaker-headline'>
        {headline}
      </span>
      <br />
      <span className='speaker-company'>
        {company}
      </span>
      <br />
      <div className='speaker-links'>
        <span>
          {twitterUrl}
        </span>
        <br />
        <span>
          {githubUrl}
        </span>
      </div>    
    </div>
  </div>
)

const SpeakerGrid = ({ speakers }) => (
  <div className='speaker-grid-parent'>
    <div className='speaker-grid'>
      {speakers.map(speaker => (
        <Speaker 
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
  speakers: [{
    imgSrc: SpeakerRF,
    imgAlt: '',
    name: 'Ryan Florence',
    headline: 'Co-founder',
    company: 'React Training',
    twitterUrl: '#',
    githubUrl: '#'
  }]
}


export default SpeakerGrid
