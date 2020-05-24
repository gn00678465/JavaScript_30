const play = document.querySelector('.player')
const video = play.querySelector('.viewer')
const toggle = play.querySelector('.toggle')
const Stop = play.querySelector('.stop')
const skipButtons = play.querySelectorAll('.skip')
const progressBar = play.querySelector('.progress__filled')
const ranges = play.querySelectorAll('input[type="range"]')
const progress = play.querySelector('.progress')

function togglePlay() {
  const method = video.paused ? "play" : "pause"
  video[method]()
}
function updateToggleIcon() {
  const icon = video.paused ? "►" : "❚❚"
  toggle.textContent = icon
}

function stopPlay() {
  video.load()
  toggle.textContent = "►"
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
  console.log(this.dataset.skip)
}

function handleProgressBar() {
  const persent = ( video.currentTime / video.duration ) * 100
  progressBar.style.flexBasis = `${persent}%`
}

function handlerRange(e) {
  video[e.target.name] = e.target.value
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
Stop.addEventListener('click', stopPlay)

video.addEventListener('play', updateToggleIcon)
video.addEventListener('pause', updateToggleIcon)
video.addEventListener('timeupdate', handleProgressBar)

skipButtons.forEach( button => button.addEventListener('click', skip))
ranges.forEach( range => range.addEventListener('change', handlerRange))
ranges.forEach( range => range.addEventListener('mousemove', handlerRange))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => { mouseDown && scrub(e) })
progress.addEventListener('mousedown', () => { mouseDown = true })
progress.addEventListener('mouseup', () => { mouseDown = false })
