import React from 'react'
import SpeakerProfileBanner from './Banner'
import SpeakerProfileGrid from './Grid'
import SpeakerProfileFooter from './Footer'
import { getPodcastAlbumArt, getPodcastSrc } from '../../utils/podcast'
import { getSpeakerId } from '../../utils/speaker'
import SPEAKER_IMG_MAP from './image-map'
import SPEAKER_PODCAST_MAP from './podcast-map'
import SPEAKER_PODCAST_ALBUM_ART_MAP from './podcast-album-art-map'
import data from '../../assets/data/Speakers/speakers.json'
// import data1 from '../../assets/data/Speakers/speakers1.json'
import './index.css'

// const data = [
//   { speakers: [...data0[0].speakers, ...data1[0].speakers] },
//   { mc: [...data0[1].mc, ...data1[1].mc] },
// ]

const SpeakerProfileWrap = ({ speaker, previous, next }) =>
  speaker ? (
    <section className="section-speaker-profile">
      <SpeakerProfileBanner speaker={speaker} />
      <section className="section-content section-speaker-profile-content">
        <SpeakerProfileGrid speaker={speaker} />
        <SpeakerProfileFooter
          speaker={speaker}
          previous={previous}
          next={next}
        />
      </section>
    </section>
  ) : null

const SpeakerProfile = ({ name: id }) => {
  const { speaker, previous, next } = getSpeakerProfileData(id)

  return (
    <SpeakerProfileWrap speaker={speaker} previous={previous} next={next} />
  )
}

const getSpeakerProfileData = speakerId => {
  const empty = {
    speaker: null,
    previous: null,
    next: null,
  }
  if (!speakerId) return empty
  const allSpeakers =
    data && data.length > 0 ? [...data[0].speakers, ...data[1].mc] : []
  const speakerIndex = allSpeakers.findIndex(
    speaker => getSpeakerId(speaker.name) === speakerId
  )
  const speakerPOI = speakerIndex !== -1 ? allSpeakers[speakerIndex] : undefined

  if (!speakerPOI) return empty

  const previousSpeaker =
    speakerIndex === 0
      ? allSpeakers[allSpeakers.length - 1]
      : allSpeakers[speakerIndex - 1]
  const nextSpeaker =
    speakerIndex === allSpeakers.length - 1
      ? allSpeakers[0]
      : allSpeakers[speakerIndex + 1]
  const podcastProps = speakerPOI.podcast
    ? {
        podcast: getPodcastSrc({
          src: speakerPOI.podcast.src || speakerId,
          artist: speakerPOI.name,
          track: speakerPOI.track,
          isExternalSrc: speakerPOI.podcast.isExternal,
          internalMap: SPEAKER_PODCAST_MAP,
        }),
        podcastAlbumArt: getPodcastAlbumArt({
          src: speakerPOI.podcast.src || speakerId,
          artist: speakerPOI.name,
          track: speakerPOI.podcast.track,
          isExternalSrc: speakerPOI.podcast.isExternal,
          internalMap: SPEAKER_PODCAST_ALBUM_ART_MAP,
        }),
      }
    : { podcast: null, podcastAlbumArt: null }

  return {
    speaker: {
      ...speakerPOI,
      photo: SPEAKER_IMG_MAP[speakerId],
      ...podcastProps,
    },
    previous: {
      ...previousSpeaker,
      photo: SPEAKER_IMG_MAP[getSpeakerId(previousSpeaker.name)],
    },
    next: {
      ...nextSpeaker,
      photo: SPEAKER_IMG_MAP[getSpeakerId(nextSpeaker.name)],
    },
  }
}

export default SpeakerProfile
