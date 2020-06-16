;(function(){
  const btns = document.querySelectorAll('.timer__button')
  const displayEndTime = document.querySelector('.display__end-time')
  const displayTimeLeft = document.querySelector('.display__time-left')
  let countdown, countdown_2

  const addZero = function (para) {
    return para < 10 ? `0${para}` : para
  }

  const clickHandler = function () {
    const seconds = parseInt(this.dataset.time)
    startTimer(seconds)
  }
  const startTimer = function (seconds) {
    clearInterval(countdown)
    // cancelAnimationFrame(countdown_2)
    const now = Date.now();
    const endTime = now + seconds * 1000
    showEndTime(endTime)
    countdown = setInterval(function () {
      const timeLeft = Math.round((endTime - Date.now())/1000)
      if (timeLeft <= 0) {
        clearInterval(countdown)
        return
      }
      showTimeLeft(timeLeft)
    }, 1000/60)

    // countdown_2 = requestAnimationFrame(function() {
    //   const timeLeft = Math.round((endTime - Date.now())/1000)
    //   if (timeLeft <= 0) {
    //     cancelAnimationFrame(countdown_2)
    //     startTimer(seconds)
    //     return
    //   }
    //   showTimeLeft(timeLeft)
    // })
  }
  const showEndTime = function (time) {
    let d = new Date(time)
    const hour = addZero(d.getHours())
    const min = addZero(d.getMinutes())
    displayEndTime.textContent = `End at ${hour} : ${min}`
  }
  const showTimeLeft = function (time) {
    const min = addZero(Math.floor(time / 60))
    const sec = addZero(time % 60)
    displayTimeLeft.textContent = `${min}:${sec}`
  }


  btns.forEach( btn => {btn.addEventListener('click', clickHandler)})
  document.querySelector('#custom').addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = parseInt(this.minutes.value)
    if (mins) {
      startTimer(mins * 60)
      this.reset()
    }
  })
})()