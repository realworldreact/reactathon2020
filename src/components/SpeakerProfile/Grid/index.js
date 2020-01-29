import React from 'react'
import './index.css'

const SpeakerProfileSpeakerInfo = ({ photo, twitter, github, website }) => (
  <div className='speaker-profile-grid-info'>
    {twitter}
  </div>
)

const SpeakerProfileDetails = ({ speaker }) => (
  <div className='speaker-profile-grid-details'>
    {speaker.toString()}
  </div>
)

const SpeakerProfileGrid = ({ speaker = {} }) => (
  speaker && <section className='speaker-profile-grid'>
    <SpeakerProfileSpeakerInfo
      photo={speaker.photo}
      twitter={speaker.twitter}
      github={speaker.github}
      website={speaker.website}
    />
    <SpeakerProfileDetails
      speaker={speaker}
    />
  </section>
)

export default SpeakerProfileGrid
