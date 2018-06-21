function timer() {
    let time = 0
    let interval = null
    let startBtn = $('#start-timer')
    let stopBtn = $('#stop-timer')
    startBtn.on('click', start)
    stopBtn.on('click', stop)

    function start() {
        if (interval === null){
            interval = setInterval(increment, 1000)
        }
    }

    function stop() {
        clearInterval(interval)
        interval = null
    }

    function increment() {
        time++
        $('#hours').text(("0" + Math.floor(time/3600)).slice(-2))
        $('#minutes').text(("0" + Math.floor((time/60)%60)).slice(-2))
        $('#seconds').text(("0" + time%60).slice(-2))
    }
}