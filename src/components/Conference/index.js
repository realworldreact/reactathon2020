import React from 'react'
import Fade from 'react-reveal/Fade'
import calendar1Icon from '../../assets/icons/calendar-1@3x.png'
import calendar2Icon from '../../assets/icons/calendar-2@3x.png'

const Conference = () => (
  <section id="conference" style={{ marginTop: 50, marginBottom: 30 }}>
    <h1 style={{ marginBottom: 30 }}>Developer Conference</h1>
    <p style={{ maxWidth: 610, marginLeft: 'auto', marginRight: 'auto' }}>
      Reactathon is a 3-day dual-conference in the heart of San Francisco
      featuring some of the brightest minds in the JS/React community.
    </p>
    <p style={{ marginTop: 15 }}>You can attend one or both conferences:</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 630,
      }}
    >
      <div style={{ textAlign: 'center', width: 290 }}>
        <img
          src={calendar1Icon}
          alt="fundamentals calendar icon"
          className="icon"
        />
        <h1 style={{ marginBottom: 30 }}>Fundamentals</h1>
        <p>
          A full day of talks filled with fundamentals, best practices, and
          contextual advice in a single-day, single-track conference
        </p>
      </div>
      <div style={{ textAlign: 'center', width: 290 }}>
        <img
          src={calendar2Icon}
          alt="advanced calendar icon"
          className="icon"
        />
        <h1 style={{ marginBottom: 30 }}>Advanced</h1>
        <p>
          Two full days of talks, mingling, and new friends built around the
          cutting-edge of web and mobile development
        </p>
      </div>
    </div>
  </section>
)

export default Conference
