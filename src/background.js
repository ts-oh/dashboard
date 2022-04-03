import pageBody from './dom.js'

const getImage = async () => {
  const response = await fetch(
    ' https://apis.scrimba.com/unsplash/photos/random'
  )
  const data = await response.json()
  pageBody.bgContainer.style.backgroundImage = `url(${data.urls.full}`
  pageBody.authorInfo.textContent = `📷 Background photo by: '${data.user.name}'`
  pageBody.gitRepoLink.textContent = `🐙 Git Repository`
}

const getBgImage = getImage()

export default getBgImage
