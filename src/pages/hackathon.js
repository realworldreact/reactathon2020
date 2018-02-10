import React from 'react'
import RegisterNowCallToAction from '../components/RegisterNowCallToAction'
import Register from '../components/Register'

const Hackathon = () => (
  <div style={{ marginTop: 60, marginBottom: 100, textAlign: 'center' }}>
    <h1>Hackathon</h1>
    <h3 style={{ color: '#535353', marginTop: 20, marginBottom: 50 }}>
      Saturday, March 24 - Sunday, March 25
    </h3>
    <div style={{ marginBottom: 50 }}>
      <RegisterNowCallToAction
        title="LET’S BUILD SOMETHING GREAT TOGETHER"
        descriptionParagraphs={[
          'Join us at GitHub’s beautiful headquarters in downtown San Francisco for this 2-day non-sleepover hackathon. Come build a project with like-minded individuals, work with some incredible APIs, make new friends, and show off your project to the world!',
          'The top 7 teams get to demo their app in GitHub’s video studio for the rest of the hackers to see, and the top 3 get to present on stage. See the demos from last year below:',
        ]}
        callToAction="Register for each workshop separately."
      />
    </div>
    <div
      style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/B-QZrLoA2aQ"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    <hr />
    <div style={{ marginTop: 50 }}>
      <Register />
    </div>
  </div>
)

export default Hackathon
