export const getUserFriendlyTime = (durationInSeconds) => {
  if (!durationInSeconds || durationInSeconds === 0) {
    return `0:00`
  }
  const seconds = parseInt(durationInSeconds % 60)
  const minutes = parseInt((durationInSeconds / 60) % 60)
  const twoDigitsFormat = (num) => num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  return `${twoDigitsFormat(minutes)}:${twoDigitsFormat(seconds)}`
}

export const getUpdatedSeekTime = ({ currentTime, totalTime, percent }) => {
  const value = percent * totalTime
  console.log('newVal', percent, currentTime, totalTime, value)
  return value
}
