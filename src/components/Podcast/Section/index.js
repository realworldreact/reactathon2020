import React from 'react'
import PodcastPlayer from '../../PodcastPlayer'
import sectionData from '../../../assets/data/podcast/content.json'
import { getPodcastId }  from '../../../utils/podcast'
import { getSpeakerId } from '../../../utils/speaker'
import PODCAST_MAP from './podcast-map'
import SPEAKER_IMG_MAP from '../../Speakers/image-map'
import AlbumArtMap from './podcast-album-art-map'
import './index.css'

const PodcastSpeaker = ({ speaker }) => (
  <div className='podcast-item-speaker'>
    <div className='podcast-item-speaker-img-wrap'>
      <img className='podcast-item-speaker-img' src={speaker.img} alt={speaker.name.split(' ').join('-')} />
    </div>
    <div className='podcast-item-speaker-details-wrap'>
      <div className='podcast-item-speaker-details'>
        <h2 className='podcast-item-speaker-details-name'>{speaker.name}</h2>
        <span className='podcast-item-speaker-details-title'>{speaker.title}</span>
        <br />
        <span className='podcast-item-speaker-details-company'>{speaker.company}</span>
      </div>
    </div>
  </div>
)

const PodcastItem = ({ speaker, src, type, track, artist, srcFile }) => (
  <div className='podcast-item'>
    <PodcastSpeaker speaker={speaker} />
    <PodcastPlayer src={src} type={type} track={track} artist={artist} srcFile={srcFile} />
  </div>
)

const Podcasts = ({ podcasts }) => (
  <div className='podcast-grid'>
    {podcasts.map((podcast, idx) => (
      <PodcastItem
        key={idx}
        src={podcast.src}
        type={podcast.type}
        speaker={podcast.speaker}
        track={podcast.track}
        artist={podcast.artist}
        srcFile={podcast.srcFile}
        albumArt={podcast.albumArt}
      />
    ))}
  </div>
)

const PodcastSection = ({ title, subtext, podcasts = [] }) => (
  <div className='podcast-section-content'>
    {podcasts.length === 0 && (
      <div>
        <h2 className='podcast-section-content-title'>
          {title}
        </h2>
        <div className='podcast-section-content-subtext'>
        {subtext}
        </div>
      </div>
    )}
    <div>
      <Podcasts
        podcasts={podcasts}
      />
    </div>
  </div>
)

PodcastSection.defaultProps = {
  title: sectionData.sectionTitle,
  subtext: sectionData.sectionSubtext,
  podcasts: sectionData.podcasts.map(podcast => ({
    ...podcast,
    artist: podcast.artist || podcast.speaker.name,
    albumArt: AlbumArtMap[
      getPodcastId({ src: podcast.podcastSrc, artist: podcast.artist, track: podcast.track })
    ],
    speaker: {
      ...podcast.speaker,
      img: SPEAKER_IMG_MAP[getSpeakerId(podcast.speaker.name)]
    },
    srcFile: PODCAST_MAP[
      getPodcastId({ src: podcast.podcastSrc, artist: podcast.artist, track: podcast.track })
    ]
  }))
}

export default PodcastSection
