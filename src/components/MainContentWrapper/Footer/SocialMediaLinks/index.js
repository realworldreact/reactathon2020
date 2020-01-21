import React from 'react'
import FacebookIcon from '../../../../assets/images/footer/footer-fb.svg'
import TwitterIcon from '../../../../assets/images/footer/footer-twitter.svg'
import MeetupIcon from '../../../../assets/images/footer/footer-meetup.svg'
import EmailIcon from '../../../../assets/images/footer/footer-email.svg'
import YoutubeIcon from '../../../../assets/images/footer/footer-youtube.svg'
import './index.css'

const SocialMediaLink = ({ className = '', href, imgSrc, imgAlt, id }) => (
  <a
    key={id}
    className={`social-media-link ${className}`} 
    href={href}
    target={href && '_blank'}
  >
    <img src={imgSrc} alt={imgAlt} />
  </a>
)

const SocialMediaLinks = ({ socialMediaLinks }) => (
  <div className='social-media-links'>
    {socialMediaLinks.map((sml, idx) => (
      <SocialMediaLink
        id={idx}
        key={idx}
        className={sml.className}
        href={sml.href}
        imgSrc={sml.imgSrc}
        imgAlt={sml.imgAlt}
      />
    ))}
  </div>
)

SocialMediaLinks.defaultProps = {
  socialMediaLinks: [{
    imgAlt: 'facebook',
    imgSrc: FacebookIcon,
    className: 'sml-facebook',
    href: 'https://fb.com/real-world-react'
  }, {
    imgAlt: 'twitter',
    imgSrc: TwitterIcon,
    className: 'sml-twitter',
    href: 'https://twitter.com/reactathon'
  }, {
    imgAlt: 'Meetup',
    imgSrc: MeetupIcon,
    className: 'sml-meetup',
    href: 'https://www.meetup.com/real-world-react/'
  }, {
    imgAlt: 'E-mail',
    imgSrc: EmailIcon,
    className: 'sml-email',
    href: 'mailto:info@reactathon.com'
  }, {
    imgAlt: 'Youtube',
    imgSrc: YoutubeIcon,
    className: 'sml-youtube',
    href: 'https://www.youtube.com/c/realworldreact'
  }]
}

export default SocialMediaLinks
