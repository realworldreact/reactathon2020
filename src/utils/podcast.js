// export const getPodcastId = ({ src, artist, track }) => {
//   if (src) return src
//   const formattedTrack = track ? track.toLowerCase() : ''
//   const formattedArtist = artist ? artist.toLowerCase() : ''
//   return `${formattedTrack.split(' ').join('-')}-${formattedArtist.split(' ').join('-')}`
// }

const getFormattedId = ({ artist, track }) => {
  const formattedTrack = track ? track.toLowerCase() : ''
  const formattedArtist = artist ? artist.toLowerCase() : ''
  return `${formattedTrack.split(' ').join('-')}-${formattedArtist.split(' ').join('-')}`
}

export const getPodcastSrc = ({ src, isExternalSrc, artist, track, internalMap }) => {
  if (isExternalSrc) {
    return src
  }
  if (src) {
    return internalMap[src]
  }
  const id = getFormattedId({ artist, track })
  return internalMap[id]
}

export const getPodcastAlbumArt = ({ src, isExternalSrc, artist, track, internalMap }) => {
  if (!isExternalSrc && src) {
    return internalMap[src]
  }
  const id = getFormattedId({ artist, track })
  return internalMap[id]
}
