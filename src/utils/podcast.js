export const getPodcastId = ({ artist, track }) => {
  const formattedTrack = track ? track.toLowerCase() : ''
  const formattedArtist = artist ? artist.toLowerCase() : ''
  return `${formattedTrack.split(' ').join('-')}-${formattedArtist.split(' ').join('-')}`
}
