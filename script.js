const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const christmasDate = new Date('25 December 2020');

function timeLeft() {
    const currentDate = new Date();

    const totalSeconds = Math.floor((christmasDate - currentDate)/1000);

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds)%60;


    daysEl.innerText=days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);



}
setInterval(() => {
    timeLeft();
}, 1000);

function formatTime(timeLeft) {
    return timeLeft<10? `0${timeLeft}`: timeLeft;
}