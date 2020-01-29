import React from 'react'
import SpeakerProfileBanner from './Banner'
import SpeakerProfileGrid from './Grid'
import { getLocationHash } from '../../utils/window'
import { getSpeakerId } from '../../utils/speaker'
import SPEAKER_IMG_MAP from './image-map'
import data from '../../assets/data/Speakers/speakers.json'
import './index.css'

const SpeakerProfileWrap = ({ speaker }) => (
  <section className='section-speaker-profile'>
    <SpeakerProfileBanner speaker={speaker} />
    <section className='section-content section-speaker-profile-content'>
      <SpeakerProfileGrid speaker={speaker} />
    </section>
  </section>
)

const SpeakerProfile = () => (
  <SpeakerProfileWrap
    speaker={getSpeakerProfileData(getLocationHash())}
  />
)

const getSpeakerProfileData = (speakerHash) => {
  if (!speakerHash) return null
  const speakerId = speakerHash.substr(1)
  const allSpeakers = data && data.length > 0 ? data[0].speakers : []
  const speakerPOI = allSpeakers.find(speaker => getSpeakerId(speaker.name) === speakerId)
  console.log(speakerHash, speakerPOI, getSpeakerId('Wes Bos') === speakerHash, allSpeakers)
  if (!speakerPOI) return null
  return {
    ...speakerPOI,
    photo: SPEAKER_IMG_MAP[speakerId]
  }
}

export default SpeakerProfile
