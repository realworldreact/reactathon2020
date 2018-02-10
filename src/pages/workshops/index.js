import React from 'react'
import RegisterNow from '../../components/RegisterNow/index'
import WorkshopCard from '../../components/WorkshopCard/index'
import workshops from './workshops.json'
import buyTicketsPlaceholder from '../../assets/placeholder/tickets-fundamentals-placeholder.png'

const Workshops = () => (
  <div style={{ marginTop: 60, marginBottom: 100, textAlign: 'center' }}>
    <h1>Workshops</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      March 19, 20, and 23
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNow
        title="GO THROUGH A HYPERLOOP OF PRODUCTIVITY"
        descriptionParagraphs={[
          'We’ve assembled a team of top engineers who build with the technologies they’re teaching every day. From core-contributors and senior engineers well-known on the conference and workshop circuit, you’ll learn in hours what they’ve have mastered over years.',
        ]}
        callToAction="Register for each workshop separately."
      />
    </div>
    <hr />
    <div
      style={{
        maxWidth: 880,
        margin: 'auto',
      }}
    >
      {workshops.map(
        (
          {
            title,
            skillLevel,
            photo,
            instructor,
            position,
            company,
            prerequisites,
            descriptions,
            time,
            length,
          },
          i
        ) => (
          <div key={`workshop-${i}`} style={{ margin: '50px 0 ' }}>
            <WorkshopCard
              title={title}
              skillLevel={skillLevel}
              photo={photo}
              instructor={instructor}
              position={position}
              company={company}
              prerequisites={prerequisites}
              descriptions={descriptions}
              time={time}
              length={length}
            />
            <div style={{ margin: '50px 0' }}>
              <img src={buyTicketsPlaceholder} />
            </div>
            <hr />
          </div>
        )
      )}
    </div>
    <section id="buy-tickets">
      <h1 style={{ marginBottom: 20 }}>Register</h1>
      <p style={{ fontSize: 14, marginBottom: 50 }}>A nominal fee is required to reduce no-shows</p>
      <img src={buyTicketsPlaceholder} />
    </section>
  </div>
)

export default Workshops
