import React from 'react'
import IconGithub from '../../../assets/icons/home/icon-github.svg'
import IconTwitter from '../../../assets/icons/home/icon-twitter.svg'
import './index.css'

const Speaker = ({ id, className = '', imgSrc, imgAlt, name, headline, company, twitterUrl = '#', githubUrl = '#' }) => (
  <div key={id} className={`speaker ${className}`}>
    <div className='speaker-img-wrap'>
      <img className='speaker-img' src={imgSrc} alt={imgAlt} />
    </div>
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
          <img src={IconTwitter} alt='twitter-icon' /> &nbsp;
          <a href={twitterUrl}>
            Twitter
          </a>
        </span>
        <br />
        <span>
          <img src={IconGithub} alt='github-icon' /> &nbsp;
          <a href={githubUrl}>
            Github
          </a>
        </span>
      </div>
    </div>
  </div>
)

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
