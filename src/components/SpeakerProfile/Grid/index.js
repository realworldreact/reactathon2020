import React from 'react'
import Link from '../../Link'
import TwitterIcon from '../../../assets/icons/home/icon-twitter.svg'
import GithubIcon from '../../../assets/icons/home/icon-github.svg'
import './index.css'

const SpeakerProfileSpeakerInfoLink = ({ href, icon, text, className = '' }) => (
  <span className={`speaker-profile-grid-info-link ${className}`}>
    <Link
        href={href}
        isExternal={true}
        target={'_blank'}
        text={(
          <span>
            <img src={icon} alt={text} />&nbsp;
            {text}
          </span>
        )}
    />
    <br />
  </span>
)

const SpeakerProfileSpeakerInfo = ({ name, photo, twitter, github, website }) => {
  const links = [{
    href: `https://twitter.com/${twitter}`,
    text: `@${twitter}`,
    icon: TwitterIcon
  }, {
    href: `https://github.com/${github}`,
    text: `${github}`,
    icon: GithubIcon
  }, {
    href: website,
    text: website.replace('http://', '').replace('https://', '').replace('www.', ''),
    icon: GithubIcon
  }]
  return (
    <div className='speaker-profile-grid-info'>
      <div className='speaker-profile-grid-img-wrap'>
        <img
          className='speaker-profile-grid-img'
          src={photo}
          alt={name.split(' ').join('-')}
        />
      </div>
      <div className='speaker-profile-grid-info-links'>
        {links.map((link, idx) => (
          <SpeakerProfileSpeakerInfoLink
            href={link.href}
            text={link.text}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  )
}

const SpeakerProfileDetails = ({ speaker }) => (
  <div className='speaker-profile-grid-details'>
    {speaker.toString()}
  </div>
)

const SpeakerProfileGrid = ({ speaker = {} }) => (
  speaker && <section className='speaker-profile-grid'>
    <SpeakerProfileSpeakerInfo
      name={speaker.name}
      photo={speaker.photo}
      twitter={speaker.twitter}
      github={speaker.github}
      website={speaker.website}
    />
    <SpeakerProfileDetails
      speaker={speaker}
    />
  </section>
)

export default SpeakerProfileGrid
