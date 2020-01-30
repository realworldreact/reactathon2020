import React from 'react'
import './index.css'

const Speaker = ({ id, className = '', imgSrc, imgAlt, name, headline, company, twitterUrl = '#', githubUrl = '#' }) => (
  <div key={id} className={`speaker ${className}`}>
    <div className='speaker-img-wrap'>
      {/* <img className='speaker-img' src={imgSrc} alt={imgAlt} /> */}
      <Link
        href={getSpeakerProfileUrl(name)}
        text={<img className='speaker-img' src={imgSrc} alt={imgAlt} />}
        isExternal={false}
      />
    </div>
    <div className='speaker-description'>
      <Link
        href={getSpeakerProfileUrl(name)}
        text={<h2 className='speaker-name'>{name}</h2>}
        isExternal={false}
      />
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

export default Speaker
