import React from 'react'
import RegisterNow from '../components/RegisterNow'

const Workshops = () => (
  <section style={{ marginTop: 60, marginBottom: 60, textAlign: 'center' }}>
    <h1>Workshops</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      March 19, 20, and 23
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNow
        title="GO THROUGH A HYPERLOOP OF PRODUCTIVITY"
        description={
          <p>
            We’ve assembled a team of top engineers who build with the
            technologies they’re teaching every day. From core-contributors and
            senior engineers well-known on the conference and workshop circuit,
            you’ll learn in hours what they’ve have mastered over years.
          </p>
        }
        callToAction="Register for each workshop separately."
      />
    </div>
    <hr />
  </section>
)

export default Workshops
