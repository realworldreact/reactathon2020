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
import LibertyMutualLogo from '../../../../assets/images/home/sponsors/sponsor-liberty-mutual.svg'
import CourseLiftLogo from '../../../../assets/images/home/sponsors/sponsor-courselift.svg'
import AntStackLogo from '../../../../assets/images/home/sponsors/sponsor-antstack.svg'
import UpstashLogo from '../../../../assets/images/home/sponsors/sponsor-upstash.svg'
import ClerkLogo from '../../../../assets/images/home/sponsors/sponsor-clerk.svg'
import MuiLogo from '../../../../assets/images/home/sponsors/sponsor-mui.svg'
import ConvexLogo from '../../../../assets/images/home/sponsors/sponsor-convex.svg'
import NXLogo from '../../../../assets/images/home/sponsors/sponsor-nx.svg'
import KontentLogo from '../../../../assets/images/home/sponsors/sponsor-kontent.svg'
import CodeminerLogo from '../../../../assets/images/home/sponsors/sponsor-codeminer.svg'
import SauceLabsLogo from '../../../../assets/images/home/sponsors/sponsor-saucelabs.svg'
import OpenSaucedLogo from '../../../../assets/images/home/sponsors/sponsor-opensauced.svg'
import StytchLogo from '../../../../assets/images/home/sponsors/sponsor-stytch.svg'

import './index.css'

const SPONSOR_EMAIL = 'sponsors@reactathon.com'

const Sponsor = ({
  id,
  title,
  logos = [],
  description = '',
  className = '',
  logoClassName = '',
}) => (
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
      <div className="sponsor-grid-sponsor-description-wrap">
        <div className="sponsor-grid-sponsor-description">{description}</div>
      </div>
    )}
  </div>
)

const SponsorTitle = ({ text }) => (
  <h2 className="sponsor-grid-sponsor-title">{text}</h2>
)

const SponsorFooter = ({ text, subtext, sponsorEmail }) => (
  <div className="sponsor-grid-footer">
    <div className="sponsor-grid-footer-content">
      <p className="sponsor-grid-footer-content-bold">{text}</p>
      <p>{subtext}</p>
      <a
        className="sponsor-grid-footer-content-link"
        href={`mailto:${sponsorEmail}`}
      >
        {sponsorEmail}
      </a>
    </div>
  </div>
)

const SponsorGrid = ({ sponsors, footer }) => (
  <div className="sponsor-grid">
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
    sponsorEmail: SPONSOR_EMAIL,
  },
  sponsors: [
    {
      title: 'Presenting Sponsor',
      className: '',
      logos: [
        {
          src: ClerkLogo,
          className: 'sponsor-logo-clerk',
          alt: 'Clerk Logo',
          href: 'https://clerk.dev',
        },
      ],
      description: `
        Ridiculously easy React authentication – just add <SignIn /> and <UserProfile />
      `,
    },
    // {
    //   title: 'Platinum Sponsors',
    //   logos: [
    //     {
    //       src: HasuraLogo,
    //       className: 'sponsor-logo-hasura',
    //       alt: 'Hasura Logo',
    //       href: 'https://www.hasura.io/',
    //     },
    //   ],
    //   description: `
    // Instant GraphQL for your new / existing applications - Hasura connects to your databases, and other APIs
    // (REST & GraphQL) and sets you up with an instant, realtime, unified GraphQL API that developers love!
    // Hasura.io is open source and requires no upfront GraphQL knowledge to get started.
    // `,
    // },
    {
      title: 'Gold Sponsors',
      logoClassName: 'sponsor-grid-sponsor-logos-gold',
      logos: [
        {
          src: MuiLogo,
          className: 'sponsor-logo-mui',
          alt: 'MUI Logo',
          href: 'https://www.mui.com/',
        },
        {
          src: ReplayLogo,
          className: 'sponsor-logo-replay',
          alt: 'Replay Logo',
          href: 'https://replay.io',
        },
        {
          src: KontentLogo,
          className: 'sponsor-logo-kontent',
          alt: 'Kontent Logo',
          href: 'https://kontent.ai',
        },
        {
          src: ConvexLogo,
          className: 'sponsor-logo-convex',
          alt: 'Convex Logo',
          href: 'https://www.convex.dev/',
        },
        {
          src: MuxLogo,
          className: 'sponsor-logo-mux',
          alt: 'Mux Logo',
          href: 'https://www.mux.com/',
        },
        {
          src: NXLogo,
          className: 'sponsor-logo-nx',
          alt: 'NX Logo',
          href: 'https://nx.dev/',
        },
        {
          src: NetlifyLogo,
          className: 'sponsor-logo-netlify',
          alt: 'Netlify Logo',
          href: 'https://netlify.com/',
        },
      ],
    },
    {
      title: 'Silver Sponsors',
      logoClassName: 'sponsor-grid-sponsor-logos-silver',
      logos: [
        {
          src: SauceLabsLogo,
          className: 'sponsor-logo-convex',
          alt: 'SauceLabs logo',
          href: 'https://saucelabs.com/',
        },
        {
          src: StytchLogo,
          className: 'sponsor-logo-sanity',
          alt: 'Stytch logo',
          href: 'https://stytch.com/',
        },
      ],
    },
    {
      title: 'Community Sponsors',
      logoClassName: 'sponsor-grid-sponsor-logos-community',
      logos: [
        {
          src: CodeminerLogo,
          className: 'sponsor-logo-sanity',
          alt: 'codeminer logo',
          href: 'https://www.codeminer42.com/',
        },
        {
          src: XataLogo,
          className: 'sponsor-logo-sanity',
          alt: 'Xata logo',
          href: 'https://xata.io/',
        },
        {
          src: OpenSaucedLogo,
          className: 'sponsor-logo-sanity',
          alt: 'OpenSauced logo',
          href: 'https://opensauced.pizza/',
        },
        {
          src: VercelLogo,
          className: 'sponsor-logo-sanity',
          alt: 'Vercel logo',
          href: 'https://vercel.com/',
        },
      ],
    },
  ],
}

export default SponsorGrid
