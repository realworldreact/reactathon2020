import React from 'react'
import Link from 'gatsby-link'
import blackLogo from '../assets/reactathon-logo-black.svg'
import calendar1 from '../assets/icons/calendar-1@3x.png'
import calendar2 from '../assets/icons/calendar-2@3x.png'

const Conference = () => (
  <section id="conference" style={{ marginTop: 30, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Developer Conference</h1>
    <p>
      Reactathon is a 3-day dual-conference in the heart of San Francisco
      featureing some of the brightest minds in the JS/React community.
    </p>
    <p style={{ marginTop: 15 }}>You can attend one or both conferences:</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 50,
      }}
    >
      <div style={{ textAlign: 'center', width: 290 }}>
        <img
          src={calendar1}
          alt="fundamentals calendar icon"
          className="icon"
        />
        <h1 style={{ marginBottom: 30 }}>Fundamentals</h1>
        <p>
          Over 15 talks filled with fundamentals, best practices, and contextual
          advice in a single-day, single-track conference
        </p>
      </div>
      <div style={{ textAlign: 'center', width: 290 }}>
        <img src={calendar2} alt="advanced calendar icon" className="icon" />
        <h1 style={{ marginBottom: 30 }}>Advanced</h1>
        <p>
          Two full days of talks, mingling, and new friends built around the
          cutting-edge of web and mobile development
        </p>
      </div>
    </div>
  </section>
)

const Speakers = () => (
  <section style={{ marginTop: 50, marginBottom: 50 }}>
    <h1 style={{ marginBottom: 30 }}>Speakers</h1>
    <p>CFPs are now open.</p>
    <p style={{ marginTop: 15 }}>
      Talks for the Fundamentals conf are nearly full, but we are still accepting submissions.<br/>
      Half of the spots for the 2-day Advanced conf are still available
    </p>
    <div style={{ display: 'flex', margin: '15px auto', justifyContent: 'space-between', width: 200 }}>
      <Link>Talks CFP</Link>
      <Link>Workshops CFP</Link>
    </div>
    <p>Submission Deadline: January 29</p>
  </section>
)

const IndexPage = () => (
  <main style={{ textAlign: 'center', marginTop: 100 }}>
    <img src={blackLogo} alt="Reactathon logo" />
    <h1 style={{ marginTop: 30 }}>March 20-22, 2018</h1>
    <h2>San Francisco</h2>
    <Conference />
    <hr />
    <Speakers/>
    <hr />
  </main>
)

export default IndexPage
