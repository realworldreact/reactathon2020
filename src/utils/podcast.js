export const getPodcastId = ({ src, artist, track }) => {
  if (src) return src
  const formattedTrack = track ? track.toLowerCase() : ''
  const formattedArtist = artist ? artist.toLowerCase() : ''
  return `${formattedTrack.split(' ').join('-')}-${formattedArtist.split(' ').join('-')}`
}
