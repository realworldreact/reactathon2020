import React from 'react'
import FlexportLogo from '../../../../assets/images/home/sponsors/sponsor-flexport.svg'
import LendingClubLogo from '../../../../assets/images/home/sponsors/sponsor-lending-club.svg'
import NetflixLogo from '../../../../assets/images/home/sponsors/sponsor-netflix.svg'
import './index.css'

const SPONSOR_EMAIL = 'sponsors@reactathon.com'

const Sponsor = ({ id, title, logos = [], description = ''}) => (
  <div key={id} className='sponsor-grid-sponsor'>
    <SponsorTitle text={title} />
    <div className='sponsor-grid-sponsor-logos'>
      {logos.map((logo, idx) => (
        <a key={idx} target={logo.href && 'blank'} href={logo.href || '#'}>
          <img
            className='sponsor-grid-sponsor-logo'
            src={logo.src}
            alt={logo.alt}
          />
        </a>
      ))}
    </div>
    {description && (
      <div className='sponsor-grid-sponsor-description-wrap'>
        <div className='sponsor-grid-sponsor-description'>
          {description}
        </div>
      </div>
    )}
  </div>
)

const SponsorTitle = ({ text }) => (
  <h2 className='sponsor-grid-sponsor-title'>
    {text}
  </h2>
)

const SponsorFooter = ({ text, subtext, sponsorEmail }) => (
  <div className='sponsor-grid-footer'>
    <div className='sponsor-grid-footer-content'>
      <p className='sponsor-grid-footer-content-bold'>
        {text}
      </p>
      <p>{subtext}</p>
      <a
        className='sponsor-grid-footer-content-link'
        href={`mailto:${sponsorEmail}`}>
          {sponsorEmail}
      </a>
    </div>
  </div>
)

const SponsorGrid = ({ sponsors, footer }) => (
  <div className='sponsor-grid'>
    {sponsors.map((sponsor, idx) => (
      <Sponsor
        key={idx}
        id={idx}
        title={sponsor.title}
        logos={sponsor.logos}
        description={sponsor.description}
      />
    ))}
    <SponsorFooter {...footer} />
  </div>
)

SponsorGrid.defaultProps = {
  footer: {
    text: 'Interested in sponsoring the React.js event of the year?',
    subtext: 'Request the sponsorship guide at',
    sponsorEmail: SPONSOR_EMAIL
  },
  sponsors: [{
    title: 'Presenting Sponsor',
    logos: [{
      src: FlexportLogo,
      alt: 'flexport-logo',
      href: 'https://flexport.com/careers'
    }],
    description: `
      At Flexport, we're building the technology that's simplifying global trade.
      We're making it easier for organizations around the worldto move their cargo from
      one place to another - and that takes a lot of Javascript! If you'd like to help
      us out with that responsibility, check us out! We're heavy React users.
    `,
  }, {
    title: 'Silver Sponsors',
    logos: [{
      src: LendingClubLogo,
      alt: 'lending-club'
    }],
  }, {
    title: 'Community Sponsors',
    logos: [{
      src: NetflixLogo,
      alt: 'netflix-logo'
    }]
  }]
}

export default SponsorGrid
