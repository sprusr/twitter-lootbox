import '../css/content.css'

//Twitter navigation container element
const navContainer = document.querySelector('.global-nav-inner > .container')
const nav = navContainer.querySelector(':nth-child(2)')

let coinsNode = document.createElement('div')
coinsNode.setAttribute('class', 'coins')
coinsNode.innerHTML = `
  <progress value="0" max="100" class="coin-progress"></progress>
  <div class="coin-level">Level <span class="coin-level-value">0</span></div>
  <div class="coin-values">
    <div class="coin-count"><img src="https://i.imgur.com/IOzh2gC.png" alt="Coin" class="coin-icon"><span class="count">0</span></div>
    <div class="jewel-count"><img src="https://i.imgur.com/uiriN1y.png" alt="Jewel" class="jewel-icon"><span class="count">0</span></div>
  </div>`
navContainer.insertBefore(coinsNode, nav)

let points = 0, coins = 0, jewels = 300, level = 0;

// Likes
let likeButtons = document.querySelectorAll('.ProfileTweet-action--favorite')
for (let button of likeButtons) {
  button.addEventListener('click', handleLike)
}

// Retweets
let retweetButtons = document.querySelectorAll('.ProfileTweet-action--retweet')
for (let button of retweetButtons) {
  button.addEventListener('click', handleRetweet)
}

// Replies
let replyButtons = document.querySelectorAll('.ProfileTweet-action--reply')
for (let button of replyButtons) {
  button.addEventListener('click', handleReply)
}

function handleLike(e) {
  points += 10
  coins += Math.floor(Math.random() * 18) + 5
  updatePoints()
}

function handleRetweet(e) {
  points += 10
  coins += Math.floor(Math.random() * 18) + 5
  updatePoints()
}

function handleReply(e) {
  points += 10
  coins += Math.floor(Math.random() * 18) + 5
  updatePoints()
}

function levelUp() {
  alert('Congrats you reached level ' + level)
}

function updatePoints() {
  let oldLevel = level

  level = Math.floor(points / 100)

  if (level > oldLevel) {
    levelUp()
  }

  document.querySelector('.coin-progress').value = points % 100
  document.querySelector('.coin-count > .count').textContent = coins
  document.querySelector('.jewel-count > .count').textContent = jewels
  document.querySelector('.coin-level-value').textContent = level
}

updatePoints()
