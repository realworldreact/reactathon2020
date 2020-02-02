export const getEmbedUrl = (url, source = 'youtube') => {
  switch (source) {
    case 'youtube':
      return `https://www.youtube.com/embed/${url.replace('https://www.youtube.com/watch?v=', '')}`
    default:
      return url
  }
}
