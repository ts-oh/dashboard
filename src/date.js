import pageBody from './dom.js'

const getTimeAndDate = () => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const dateDisplay = new Date().toLocaleDateString('en-NZ', dateOptions)
  pageBody.dateInfo.textContent = `${dateDisplay}`

  const updateTime = () => {
    const timeDisplay = new Date().toLocaleTimeString('en-NZ', timeOptions)
    pageBody.timeInfo.textContent = `${timeDisplay}`
  }
  setInterval(updateTime, 1000)
}

const displayTD = getTimeAndDate()

export default displayTD
