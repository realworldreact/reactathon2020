import React from 'react'
import SpeakerProfileBanner from './Banner'
import SpeakerProfileGrid from './Grid'
import SpeakerProfileFooter from './Footer'
import { getLocationHash } from '../../utils/window'
import { getSpeakerId } from '../../utils/speaker'
import SPEAKER_IMG_MAP from './image-map'
import data from '../../assets/data/Speakers/speakers.json'
import './index.css'


const SpeakerProfileWrap = ({ speaker, previous, next }) => (
  <section className='section-speaker-profile'>
    <SpeakerProfileBanner speaker={speaker} />
    <section className='section-content section-speaker-profile-content'>
      <SpeakerProfileGrid speaker={speaker} />
      <SpeakerProfileFooter speaker={speaker} previous={previous} next={next} />
    </section>
  </section>
)

const SpeakerProfile = () => {
  const { speaker, previous, next } = getSpeakerProfileData(getLocationHash())
  return (
    <SpeakerProfileWrap
      speaker={speaker}
      previous={previous}
      next={next}
    />
  )
}

const getSpeakerProfileData = (speakerHash) => {
  if (!speakerHash) return null
  const speakerId = speakerHash.substr(1)
  const allSpeakers = data && data.length > 0 ? data[0].speakers : []
  const speakerIndex = allSpeakers.findIndex(speaker => getSpeakerId(speaker.name) === speakerId)
  const speakerPOI = speakerIndex !== -1 ? allSpeakers[speakerIndex] : undefined
  console.log(speakerHash, speakerPOI, getSpeakerId('Wes Bos') === speakerHash, allSpeakers)
  if (!speakerPOI) return null

  const previousSpeaker = speakerIndex === 0 ? allSpeakers[allSpeakers.length - 1] : allSpeakers[speakerIndex - 1]
  const nextSpeaker = speakerIndex === allSpeakers.length - 1 ? allSpeakers[0] : allSpeakers[speakerIndex + 1]

  return {
    speaker: {
      ...speakerPOI,
      photo: SPEAKER_IMG_MAP[speakerId]
    },
    previous: {
      ...previousSpeaker,
      photo: SPEAKER_IMG_MAP[getSpeakerId(previousSpeaker.name)]
    },
    next: {
      ...nextSpeaker,
      photo: SPEAKER_IMG_MAP[getSpeakerId(nextSpeaker.name)]
    }
  }
}

export default SpeakerProfile
