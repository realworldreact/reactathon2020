export const getUserFriendlyTime = (durationInSeconds) => {
  if (!durationInSeconds || durationInSeconds === 0) {
    return `00:00`
  }
  const seconds = parseInt(durationInSeconds % 60)
  const minutes = parseInt((durationInSeconds / 60) % 60)
  const twoDigitsFormat = (num) => num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  return `${twoDigitsFormat(minutes)}:${twoDigitsFormat(seconds)}`
}

export const getUpdatedSeekTime = ({ currentTime, totalTime, percent }) => {
  const value = percent * totalTime
  return value
}

export const getSeekPercentChange = ({ event, element }) => {
  const rect = event.target.getBoundingClientRect()

  const { x, left, right } = rect
  const { offsetWidth } = element
  const { clientX } = event

  const min = x || left
  const max = right || offsetWidth
  const move = clientX

  const change = (move - min) / (max - min)
  const percent = change > 1 ? 1 : change

  return percent
}
