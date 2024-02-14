let stopBtn = document.querySelector('.stop')
let readyBtn = document.querySelector('.ready')
let goBtn = document.querySelector('.go')


let bulb1 = document.querySelector('.bulb1')
let bulb2 = document.querySelector('.bulb2')
let bulb3 = document.querySelector('.bulb3')

const stop = () => {
    stopBtn.style.backgroundColor = '#cf1124';
    readyBtn.style.backgroundColor = '#1f1d41';
    goBtn.style.backgroundColor = '#1f1d41';
    bulb1.style.backgroundColor = '#cf1124';
    bulb2.style.backgroundColor = '#4b5069';
    bulb3.style.backgroundColor = '#4b5069';
}

const ready = () => {
    stopBtn.style.backgroundColor = '#1f1d41';
    readyBtn.style.backgroundColor = '#f7c948';
    goBtn.style.backgroundColor = '#1f1d41';
    bulb1.style.backgroundColor = '#4b5069';
    bulb2.style.backgroundColor = '#f7c948';
    bulb3.style.backgroundColor = '#4b5069';
}

const go = () => {
    stopBtn.style.backgroundColor = '#1f1d41';
    readyBtn.style.backgroundColor = '#1f1d41';
    goBtn.style.backgroundColor = '#199473';
    bulb1.style.backgroundColor = '#4b5069';
    bulb2.style.backgroundColor = '#4b5069';
    bulb3.style.backgroundColor = '#199473';
}



