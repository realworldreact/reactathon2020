export const getSpeakerId = (name) => {
  if (!name) return null
  return name.toLowerCase().split(' ').join('-')
}

export const getSpeakerProfileUrl = (name) => `/speakers/profile#${getSpeakerId(name)}`

export const sanitizeWebsiteUrl = (url) => url.replace('http://', '').replace('https://', '').replace('www.', '')
