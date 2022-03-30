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
import StatelyLogo from '../../../../assets/images/home/sponsors/sponsor-stately.svg'
import PrismaLogo from '../../../../assets/images/home/sponsors/sponsor-prisma.svg'
import SanityLogo from '../../../../assets/images/home/sponsors/sponsor-sanity.svg'
import LumigoLogo from '../../../../assets/images/home/sponsors/sponsor-lumigo.svg'
import MoonHighwayLogo from '../../../../assets/images/home/sponsors/sponsor-moon-highway.svg'
import InfiniteRedLogo from '../../../../assets/images/home/sponsors/sponsor-infinite-red.svg'
import CloudinaryLogo from '../../../../assets/images/home/sponsors/sponsor-cloudinary.svg'
import MediaJamsLogo from '../../../../assets/images/home/sponsors/sponsor-mediajams.svg'
import AgGridLogo from '../../../../assets/images/home/sponsors/sponsor-aggrid.svg'
import StoryblokLogo from '../../../../assets/images/home/sponsors/sponsor-storyblok.svg'
import ReplayLogo from '../../../../assets/images/home/sponsors/sponsor-replay.svg'
import PlanetscaleLogo from '../../../../assets/images/home/sponsors/sponsor-planetscale.svg'
import XataLogo from '../../../../assets/images/home/sponsors/sponsor-xata.svg'
import DivvyLogo from '../../../../assets/images/home/sponsors/sponsor-divvy.svg'
import FaunaLogo from '../../../../assets/images/home/sponsors/sponsor-fauna.svg'
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
    Vercel is a frontend cloud platform that facilitates a fast and enjoyable development and deployment 
    experience for anyone. We make it easy to integrate any framework or backend and provide global edge 
    infrastructure to serve incredible web experiences where performance is the default.
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
    Instant GraphQL for your new / existing applications - Hasura connects to your databases, and other APIs 
    (REST & GraphQL) and sets you up with an instant, realtime, unified GraphQL API that developers love! 
    Hasura.io is open source and requires no upfront GraphQL knowledge to get started. 
    `,
  }, {
    title: 'Gold Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-gold',
    logos: [{
      src: Auth0Logo,
      className: 'sponsor-logo-auth0',
      alt: 'Auth 0 Logo',
      href: 'https://www.auth0.com/'
    },{
      src: StatelyLogo,
      className: 'sponsor-logo-stately',
      alt: 'Stately AI Logo',
      href: 'https://www.stately.ai/?ref=reactathon'
    }, {
      src: PrismaLogo,
      className: 'sponsor-logo-prisma',
      alt: 'Prisma Logo',
      href: 'https://www.prisma.io'
    }, {
      src: LumigoLogo,
      className: 'sponsor-logo-lumigo',
      alt: 'Lumigo Logo',
      href: 'https://www.lumigo.io'
    }, {
      src: CourseHeroLogo,
      className: 'sponsor-logo-coursehero',
      alt: 'Course Hero Logo',
      href: 'https://www.coursehero.com'
    }, {
      src: VonageLogo,
      className: 'sponsor-logo-vonage',
      alt: 'Vonage Logo',
      href: 'https://vonage.com'
    }, {
      src: ReplayLogo,
      className: 'sponsor-logo-replay',
      alt: 'Replay Logo',
      href: 'https://replay.io'
    }, {
      src: PlanetscaleLogo,
      className: 'sponsor-logo-planetscale',
      alt: 'Planetscale Logo',
      href: 'https://planetscale.com'
    }, {
      src: DivvyLogo,
      className: 'sponsor-logo-divvy',
      alt: 'Planetscale Logo',
      href: 'https://getdivvy.com'
    }, {
      src: FaunaLogo,
      className: 'sponsor-logo-fauna',
      alt: 'Planetscale Logo',
      href: 'https://fauna.com'
    }],
  }, {
    title: 'Silver Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-silver',
    logos: [{
      src: InfiniteRedLogo,
      className: 'sponsor-logo-infinitered',
      alt: 'Infinite Red Logo',
      href: 'https://infinite.red/'
    }, {
      src: XataLogo,
      className: 'sponsor-logo-xata',
      alt: 'Xata logo',
      href: 'https://xata.io/'
    }],
  },{
    title: 'Community Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-community',
    logos: [{
      src: SanityLogo,
      className: 'sponsor-logo-sanity',
      alt: 'sanity logo',
      href: 'https://sanity.io/'
    }, {
      src: MoonHighwayLogo,
      className: 'sponsor-logo-moon-highway',
      alt: 'Moon Highway Logo',
      href: 'https://moonhighway.com'
    }, {
      src: CloudinaryLogo,
      className: 'sponsor-cloudinary',
      alt: 'Moon Highway Logo',
      href: 'https://cloudinary.rocks/jhk'
    }, {
      src: MediaJamsLogo,
      className: 'sponsor-logo-moon-highway',
      alt: 'Media Jams Logo',
      href: 'https://mediajams.dev'
    }, {
      src: AgGridLogo,
      className: 'sponsor-logo-aggrid',
      alt: 'AG Grid Logo',
      href: 'https://ag-grid.com'
    }, {
      src: StoryblokLogo,
      className: 'sponsor-logo-storyblok',
      alt: 'Storyblok Logo',
      href: 'https://www.storyblok.com/home'
    }],
  }]
}

export default SponsorGrid
