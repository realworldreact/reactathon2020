import React from 'react'
import Link from '../../Link'
import Video from '../../Video'
import PodcastPlayer from '../../PodcastPlayer'
import TwitterIcon from '../../../assets/icons/home/icon-twitter.svg'
import GithubIcon from '../../../assets/icons/home/icon-github.svg'
import WebsiteIcon from '../../../assets/icons/home/icon-web-globe.svg'
import { sanitizeWebsiteUrl } from '../../../utils/speaker'
import { getEmbedUrl } from '../../../utils/video'
import './index.css'

const SpeakerProfileSpeakerInfoLink = ({
  href,
  icon,
  text,
  className = '',
}) => (
  <span className={`speaker-profile-grid-info-link ${className}`}>
    <Link
      href={href}
      isExternal={true}
      target={'_blank'}
      text={
        <span>
          <img src={icon} alt={text} />
          {text}
        </span>
      }
    />
    <br />
  </span>
)

const SpeakerProfileSpeakerInfo = ({
  name = '',
  photo,
  twitter = '',
  github = '',
  website = '',
}) => {
  const links = [
    {
      href: `https://twitter.com/${twitter}`,
      text: `@${twitter}`,
      icon: TwitterIcon,
    },
    {
      href: `https://github.com/${github}`,
      text: `${github}`,
      icon: GithubIcon,
    },
    {
      href: website,
      text: sanitizeWebsiteUrl(website),
      icon: WebsiteIcon,
    },
  ]
  return (
    <div className="speaker-profile-grid-info">
      <div className="speaker-profile-grid-img-wrap">
        <img
          className="speaker-profile-grid-img"
          src={photo}
          alt={name.split(' ').join('-')}
        />
      </div>
      <div className="speaker-profile-grid-info-links">
        {links.map((link, idx) => (
          <SpeakerProfileSpeakerInfoLink
            key={idx}
            href={link.href}
            text={link.text}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  )
}

const SpeakerProfileDetails = ({
  name,
  talkTitle,
  talkAbstract,
  aboutHeader,
  aboutDescription,
  video,
  podcast,
  podcastTrack,
  podcastArtist,
  podcastAlbumArt,
}) => (
  <div className="speaker-profile-grid-details">
    <h2 className="speaker-profile-grid-details-header">{talkTitle}</h2>
    <p className="speaker-profile-grid-details-abstract">{talkAbstract}</p>
    {video && (
      <div className="speaker-profile-grid-details-video">
        <Video
          src={getEmbedUrl(
            video,
            video.indexOf('youtube.com') !== -1 ? 'youtube' : ''
          )}
          title={`speaker-profile-grid-details-video-frame-${name}`}
          className="speaker-profile-grid-details-video-frame"
          isExternalSource={
            ['youtube'].filter(extSrc => video.includes(extSrc)).length > 0
          }
        />
      </div>
    )}
    <div className="speaker-profile-grid-details-about">
      <h2 className="speaker-profile-grid-details-about-title">
        {aboutHeader}
      </h2>
      <p className="speaker-profile-grid-details-about-description">
        {aboutDescription}
      </p>
    </div>
    {podcast && (
      <div>
        <SpeakerPodcast
          podcastAlbumArt={podcastAlbumArt}
          podcast={podcast}
          track={podcastTrack}
          artist={podcastArtist || name}
        />
      </div>
    )}
  </div>
)

const SpeakerPodcast = ({ podcast, track, artist, podcastAlbumArt }) => (
  <PodcastPlayer
    className="speaker-podcast"
    albumArt={podcastAlbumArt}
    track={track}
    artist={artist}
    srcFile={podcast}
  />
)

const SpeakerProfileGrid = ({ speaker = {} }) =>
  speaker ? (
    <section className="speaker-profile-grid">
      <SpeakerProfileSpeakerInfo
        name={speaker.name}
        photo={speaker.photo}
        twitter={speaker.twitter}
        github={speaker.github}
        website={speaker.website}
      />
      <SpeakerProfileDetails
        name={speaker.name}
        talkTitle={speaker.talkTitle}
        talkAbstract={speaker.talkAbstract}
        aboutHeader={`About ${speaker &&
          speaker.name &&
          speaker.name.split(' ')[0]}`}
        aboutDescription={speaker.bio}
        video={speaker.video}
        podcast={speaker.podcast}
        podcastAlbumArt={speaker.podcastAlbumArt}
        podcastTrack={speaker.podcastTrack}
        podcastArtist={speaker.podcastArtist}
      />
    </section>
  ) : null

export default SpeakerProfileGrid
