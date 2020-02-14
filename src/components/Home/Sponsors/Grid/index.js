import React from 'react'
import Auth0Logo from '../../../../assets/images/home/sponsors/sponsor-auth0.svg'
import CourseHeroLogo from '../../../../assets/images/home/sponsors/sponsor-course-hero.svg'
import FacebookLogo from '../../../../assets/images/home/sponsors/sponsor-facebook.svg'
import HasuraLogo from '../../../../assets/images/home/sponsors/sponsor-hasura.svg'
import FlexportLogo from '../../../../assets/images/home/sponsors/sponsor-flexport.svg'
import LendingClubLogo from '../../../../assets/images/home/sponsors/sponsor-lending-club.svg'
import MuxLogo from '../../../../assets/images/home/sponsors/sponsor-mux.svg'
import NexmoLogo from '../../../../assets/images/home/sponsors/sponsor-nexmo.svg'
import NetflixLogo from '../../../../assets/images/home/sponsors/sponsor-netflix.svg'
import NetlifyLogo from '../../../../assets/images/home/sponsors/sponsor-netlify.svg'
import ImgixLogo from '../../../../assets/images/home/sponsors/sponsor-imgix.svg'
import ApolloLogo from '../../../../assets/images/home/sponsors/sponsor-apollo.svg'
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
      src: FlexportLogo,
      className: 'sponsor-logo-flexport',
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
    title: 'Platinum Sponsors',
    logos: [{
      src: CourseHeroLogo,
      className: 'sponsor-logo-coursehero',
      alt: 'course-hero',
      href: 'https://www.coursehero.com/jobs/'
    }],
    description: `
      Course Hero’s vision is a world where every student graduates, confident and prepared.
      We build applications and services that help millions of students learn, every day,
      on a stack that includes React, Go, Elasticsearch, Kubernetes, and Kafka.
      We're looking for software engineers who are excited to use React to build
      the next generation of powerful, adaptive learning tools and craft incredible user experiences!
    `,
  }, {
    logos: [{
      src: FacebookLogo,
      className: 'sponsor-logo-facebook',
      alt: 'facebook logo',
      href: 'https://www.facebook.com/careers/'
    }],
    description: `
      People are at the heart of every connection we build.
      We design products and deliver services that bring the world closer together —
      one connection at a time.
    `
  }, {
    title: 'Gold Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-gold',
    logos: [{
      src: ApolloLogo,
      className: 'sponsor-logo-apollo',
      alt: 'apollo',
      href: 'https://www.apollographql.com/'
    }, {
      src: ImgixLogo,
      className: 'sponsor-logo-imgix',
      alt: 'imgix',
      href: 'https://www.imgix.com/'
    }, {
    }],
  }, {
    title: 'Silver Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-silver',
    logos: [{
      src: Auth0Logo,
      className: 'sponsor-logo-auth0',
      alt: 'auth0',
      href: 'https://auth0.com/'
    }, {
      src: LendingClubLogo,
      className: 'sponsor-logo-lendingclub',
      alt: 'lending-club',
      href: 'https://www.lendingclub.com/company/careers'
    }, {
      src: HasuraLogo,
      className: 'sponsor-logo-hasura',
      alt: 'hasura',
      href: 'http://bit.ly/37llKhq'
    }, {
      src: NexmoLogo,
      className: 'sponsor-logo-nexmo',
      alt: 'nexmo',
      href: 'https://developer.nexmo.com/'
    },
    {
      src: NetlifyLogo,
      className: 'sponsor-logo-netlify',
      alt: 'Netlify',
      href: 'https://www.netlify.com/careers/'
    }, {
    }],
  }, {
    title: 'Community Sponsors',
    logoClassName: 'sponsor-grid-sponsor-logos-community',
    logos: [ {},{
      src: MuxLogo,
      className: 'sponsor-logo-mux',
      alt: 'mux',
      href: 'https://mux.com/'
    }, {
      src: NetflixLogo,
      className: 'sponsor-logo-netflix',
      alt: 'netflix-logo',
      href: 'https://jobs.netflix.com/search'
    }, {}]
  }]
}

export default SponsorGrid
