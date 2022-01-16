import React from 'react'
import Auth0Logo from '../../../../assets/images/home/sponsors/sponsor-auth0.svg'
import CourseHeroLogo from '../../../../assets/images/home/sponsors/sponsor-course-hero.svg'
import FacebookLogo from '../../../../assets/images/home/sponsors/sponsor-facebook.svg'
import HasuraLogo from '../../../../assets/images/home/sponsors/sponsor-hasura-2022.svg'
import FlexportLogo from '../../../../assets/images/home/sponsors/sponsor-flexport.svg'
import LendingClubLogo from '../../../../assets/images/home/sponsors/sponsor-lending-club.svg'
import MuxLogo from '../../../../assets/images/home/sponsors/sponsor-mux.svg'
import VonageLogo from '../../../../assets/images/home/sponsors/sponsor-vonage.svg'
import NetflixLogo from '../../../../assets/images/home/sponsors/sponsor-netflix.svg'
import NetlifyLogo from '../../../../assets/images/home/sponsors/sponsor-netlify.svg'
import ImgixLogo from '../../../../assets/images/home/sponsors/sponsor-imgix.svg'
import ApolloLogo from '../../../../assets/images/home/sponsors/sponsor-apollo.svg'
import FreeCodeCampLogo from '../../../../assets/images/home/sponsors/sponsor-freecodecamp.svg'
import ReactPodcastLogo from '../../../../assets/images/home/sponsors/sponsor-react-podcast.svg'
import VercelLogo from '../../../../assets/images/home/sponsors/sponsor-vercel.svg'
import CloudinaryLogo from '../../../../assets/images/home/sponsors/sponsor-cloudinary.svg'
import './index.css'

const SPONSOR_EMAIL = 'sponsors@reactathon.com'

const Sponsor = ({ id, title, logos = [], description = '', className = '', logoClassName = ''}) => (
  <div key={id} className={`sponsor-grid-sponsor ${className}`}>
    <SponsorTitle text={title} />
    <div className={`sponsor-grid-sponsor-logos ${logoClassName}`}>
      {logos.map((logo, idx) => (
        <a key={idx} target={logo.href && 'blank'} href={logo.href || '#'}>
          <img
            className={`sponsor-grid-sponsor-logo ${logo.className}`}
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
        className={sponsor.className || ''}
        logoClassName={sponsor.logoClassName || ''}
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
    className: '',
    logos: [{
      src: VercelLogo,
      className: 'sponsor-logo-vercel',
      alt: 'Vercel Logo',
      href: 'https://vercel.com'
    }],
    description: `
      Vercel is the best place to deploy any frontend app. Start by deploying with zero configuration 
      to our global edge network. Scale dynamically to millions of pages without breaking a sweat.
    `,
  }, {
    title: 'Platinum Sponsors',
    logos: [{
      src: HasuraLogo,
      className: 'sponsor-logo-hasura',
      alt: 'Hasura Logo',
      href: 'https://www.hasura.io/'
    }],
    description: `
      From your databases to a unified GraphQL API in just one minute. Developers and architects 
      love Hasura because it takes no time to get started, doesn’t need them to be a GraphQL expert 
      upfront, and saves their teams months of recurring effort in building, shipping and maintaining 
      their APIs.
    `,
  }, {
    title: 'Gold Sponsors',
    logos: [{
      src: Auth0Logo,
      className: 'sponsor-logo-auth0',
      alt: 'Auth 0 Logo',
      href: 'https://www.auth0.com/'
    }],
  }]
}

export default SponsorGrid
