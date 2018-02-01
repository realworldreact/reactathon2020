import React from 'react'
import benIlegbodu from './images/ben-ilegbodu@3x.png'
import brianLeroux from './images/brian-leroux@3x.png'
import christinaHolland from './images/christina-holland@3x.png'
import davidWells from './images/david-wells@3x.png'
import ericaCooksey from './images/erica-cooksey@3x.png'
import featherKnee from './images/feather-knee@3x.png'
import harryTormey from './images/harry-tormey@3x.png'
import jaredForsyth from './images/jared-forsyth@3x.png'
import jayPhelps from './images/jay-phelps@3x.png'
import joeSeifi from './images/joe-seifi@3x.png'
import johannesSchickling from './images/johannes-schickling@3x.png'
import kentCDodds from './images/kent-c-dodds@3x.png'
import markErikson from './images/mark-erikson@3x.png'
import mikeGrabowski from './images/mike-grabowski@3x.png'
import parashuramNarasimhan from './images/parashuram-narasimhan@3x.png'
import rogelioGuzman from './images/rogelio-guzman@3x.png'
import sophiaShoemaker from './images/sophia-shoemaker@3x.png'
import swizecTeller from './images/swizec-teller@3x.png'
import mattBiilman from './images/matt-biilmann@3x.png'
import kyleMatthews from './images/kyle-mathews@3x.png'
import brianDouglas from './images/brian-douglas@3x.png'
import gitHubIcon from './github.svg'
import twitterIcon from './twitter.svg'

const data = [
  {
    name: 'Ben Ilegbodu',
    company: 'Eventbrite',
    twitter: '#',
    github: '#',
    imgSrc: benIlegbodu,
  },
  {
    name: 'Kent C. Dodds',
    company: 'Paypal',
    twitter: '#',
    github: '#',
    imgSrc: kentCDodds,
  },
  {
    name: 'Sophia Shoemaker',
    company: 'Fullstack React',
    twitter: '#',
    github: '#',
    imgSrc: sophiaShoemaker,
  },
  {
    name: 'Parashuram Narasimhan',
    company: 'Facebook',
    twitter: '#',
    github: '#',
    imgSrc: parashuramNarasimhan,
  },
  {
    name: 'Jay Phelps',
    company: 'Netflix',
    twitter: '#',
    github: '#',
    imgSrc: jayPhelps,
  },
  {
    name: 'Swizec Teller',
    company: 'Yup Technologies',
    twitter: '#',
    github: '#',
    imgSrc: swizecTeller,
  },
  {
    name: 'Johannes Chickling',
    company: 'GraphCool',
    twitter: '#',
    github: '#',
    imgSrc: johannesSchickling,
  },
  {
    name: 'Feather Knee',
    company: 'Netflix',
    twitter: '#',
    github: '#',
    imgSrc: featherKnee,
  },
  {
    name: 'Mike Grabowski',
    company: 'Callstack',
    twitter: '#',
    github: '#',
    imgSrc: mikeGrabowski,
  },
  {
    name: 'Christina Holland',
    company: 'Pepperdata',
    twitter: '#',
    github: '#',
    imgSrc: christinaHolland,
  },
  {
    name: 'Brian Leroux',
    company: 'Begin.com',
    twitter: '#',
    github: '#',
    imgSrc: brianLeroux,
  },
  {
    name: 'Harry Tormey',
    company: 'Launchdrawer',
    twitter: '#',
    github: '#',
    imgSrc: harryTormey,
  },
  {
    name: 'Erica Cooksey',
    company: 'Eaze',
    twitter: '#',
    github: '#',
    imgSrc: ericaCooksey,
  },
  {
    name: 'Matt Biilman',
    company: 'Netlify',
    twitter: '#',
    github: '#',
    imgSrc: mattBiilman,
  },
  {
    name: 'Joe Seifi',
    company: 'Eventbrite',
    twitter: '#',
    github: '#',
    imgSrc: joeSeifi,
  },
  {
    name: 'Mark Erikson',
    company: 'Northrup Gruman',
    twitter: '#',
    github: '#',
    imgSrc: markErikson,
  },
  {
    name: 'Jared Forsyth',
    company: 'Khan Academy',
    twitter: '#',
    github: '#',
    imgSrc: jaredForsyth,
  },
  {
    name: 'David Wells',
    company: 'Severless',
    twitter: '#',
    github: '#',
    imgSrc: davidWells,
  },
  {
    name: 'Kyle Matthews',
    company: 'Gatsby',
    twitter: '#',
    github: '#',
    imgSrc: kyleMatthews,
  },
  {
    name: 'Rogelio Guzman',
    company: 'Docker',
    twitter: '#',
    github: '#',
    imgSrc: rogelioGuzman,
  },
]

const Speaker = ({ name, company, twitter, github, imgSrc }) => (
  <div style={{ textAlign: 'center', width: 250, marginBottom: 50 }}>
    <img src={imgSrc} alt={`${name}'s image`} style={{ width: 180 }} />
    <h2>{name}</h2>
    <h3 style={{ color: '#535353' }}>{company}</h3>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
      <a href="#" style={{ width: 40 }}>
        <img src={twitterIcon} alt="Twitter icon" style={{ width: 24 }} />
      </a>
      <a href="#" style={{ width: 40 }}>
        <img src={gitHubIcon} alt="GitHub icon" style={{ width: 24 }} />
      </a>
    </div>
  </div>
)

const Speakers = () => (
  <section style={{ marginTop: 50 }}>
    <h1 style={{ marginBottom: 50 }}>Speakers</h1>
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {data.map(({ name, company, twitter, github, imgSrc }, i) => (
        <Speaker
          key={`speaker-${i}`}
          name={name}
          company={company}
          twitter={twitter}
          github={github}
          imgSrc={imgSrc}
        />
      ))}
    </div>
    <p>We are still accepting lightning talk submissions!</p>
    <p>
      Submit your proposal&nbsp;
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScEmwHN4sQfuuyZRbXG3PKT9knHwZfDOUGCur8xaNwCADrMHA/viewform?usp=sf_link"
        target="_blank"
      >
        here
      </a>
    </p>
    <h1 style={{ marginTop: 50 }}>Your Conference MC</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Speaker
        name="Brian Douglas"
        company="Netlify"
        twitter="#"
        github="#"
        imgSrc={brianDouglas}
      />
    </div>
  </section>
)

export default Speakers
