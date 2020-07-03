export const secondsToTime = seconds => {
  const hours = Math.floor(seconds / 60 / 60)
  const minutes = Math.floor(seconds / 60) - hours * 60
  seconds = seconds % 60

  const formatNumber = value => `0${Number.parseInt(value, 10)}`.slice(-2)

  const time = [ hours, minutes, seconds ].map(formatNumber).join(':')

  return time
}
