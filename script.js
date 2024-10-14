let startTime, updatedTime, difference, interval;
let paused = true, reset = true;
let hours = 0, minutes = 0, seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime() {
    updatedTime = Date.now() - startTime;

    let totalSeconds = Math.floor(updatedTime / 1000);
    seconds = totalSeconds % 60;
    let totalMinutes = Math.floor(totalSeconds / 60);
    minutes = totalMinutes % 60;
    hours = Math.floor(totalMinutes / 60);

    display.textContent = 
        (hours > 9 ? hours : "0" + hours) + ":" + 
        (minutes > 9 ? minutes : "0" + minutes) + ":" + 
        (seconds > 9 ? seconds : "0" + seconds);
}

startBtn.addEventListener('click', function() {
    if (paused) {
        paused = false;
        startTime = Date.now() - (updatedTime || 0);
        interval = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener('click', function() {
    if (!paused) {
        paused = true;
        clearInterval(interval);
    }
});

resetBtn.addEventListener('click', function() {
    paused = true;
    clearInterval(interval);
    startTime = updatedTime = difference = 0;
    hours = minutes = seconds = 0;
    display.textContent = "00:00:00";
});
