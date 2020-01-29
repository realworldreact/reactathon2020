export const getSpeakerId = (name) => {
  if (!name) return null
  return name.toLowerCase().split(' ').join('-')
}
