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
function formatTime(timeLeft) {
    return timeLeft<10? `0${timeLeft}`: timeLeft;
}
function createChristmasTree() {
    const christmasTree = document.createElement('span');
    christmasTree.classList.add('tree');
    christmasTree.innerText='🎄';
    christmasTree.style.left = Math.random() * 100 + 'vw';
    christmasTree.style.animationDuration = Math.random() * 3 + 1;
    document.body.appendChild(christmasTree);

    // Delete a tree after 4s
    setTimeout(() => {
        christmasTree.remove();
    }, 4000);
}
function createSnow () {
    const snow = document.createElement('span');
    snow.classList.add('snow');
    randomSnowSize(snow);
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random()* 2 + 1;
    document.body.appendChild(snow);

    setTimeout(()=> {
        snow.remove();
    }, 3100);
}
function randomSnowSize(snow) {
    randomSize = Math.random()*28;
    snow.style.width = randomSize + 10 + 'px';
    snow.style.height = randomSize + 10 + 'px';
}
// Execute countdown timer every second
setInterval(() => {
    timeLeft();
}, 1000);

// Generate a new tree and snow every .6 seconds
setInterval(() => {
    createChristmasTree();
    createSnow();
}, 600);

