import React from 'react'
import LineButton from '../../../LineButton'
import IconGithub from '../../../../assets/icons/home/icon-github.svg' 
import IconTwitter from '../../../../assets/icons/home/icon-twitter.svg'
import SpeakerRF from '../../../../assets/images/home/speakers/speaker-ryan.png'
import SpeakerJB from '../../../../assets/images/home/speakers/speaker-jana.png'
import SpeakerCW from '../../../../assets/images/home/speakers/speaker-cassidy.png'
import SpeakerWB from '../../../../assets/images/home/speakers/speaker-wes.png'
import SpeakerGR from '../../../../assets/images/home/speakers/speaker-guillermo.jpg'
import SpeakerKD from '../../../../assets/images/home/speakers/speaker-kent.png'
import './index.css'

const Speaker = ({ className = '', imgSrc, imgAlt, name, headline, company, twitterUrl = '#', githubUrl = '#' }) => (
  <div className={`speaker ${className}`}>
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
    <br /><br />
    <div className='speaker-grid-cta-parent'>
      <LineButton 
        className='speaker-grid-cta-btn'
        text='View All Speakers'
      />
    </div>
  </div>
)

SpeakerGrid.defaultProps = {
  speakers: [{
    imgSrc: SpeakerRF,
    imgAlt: 'ryan-florence',
    name: 'Ryan Florence',
    headline: 'Co-founder',
    company: 'React Training',
    twitterUrl: '#',
    githubUrl: '#'
  }, {
    imgSrc: SpeakerJB,
    imgAlt: 'jana-beck',
    name: 'Jana Beck',
    headline: 'Data Visualization Engineer',
    company: 'Stitch Fix',
    twitterUrl: '#',
    githubUrl: '#'
  }, {
    imgSrc: SpeakerCW,
    imgAlt: 'cassidy-williams',
    name: 'Cassidy Williams',
    headline: 'Engineer & Instructor',
    company: 'React Training',
    twitterUrl: '#',
    githubUrl: '#'
  }, {
    imgSrc: SpeakerWB,
    imgAlt: 'wes-bos',
    name: 'Wes Bos',
    headline: 'Engineer & Entrepreneur',
    company: 'WesBos.com & Syntax.fm',
    twitterUrl: '#',
    githubUrl: '#'
  }, {
    imgSrc: SpeakerGR,
    imgAlt: 'guillermo-raunch',
    name: 'Guillermo Raunch',
    headline: 'Data Visualization Engineer',
    company: 'Stitch Fix',
    twitterUrl: '#',
    githubUrl: '#'
  }, {
    imgSrc: SpeakerKD,
    imgAlt: 'kent-c-dodds',
    name: 'Kent C. Dodds',
    headline: 'Software Engineer',
    company: 'Independent Consultant',
    twitterUrl: '#',
    githubUrl: '#'
  }]
}


export default SpeakerGrid
