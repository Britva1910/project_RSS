const secondHand = document.querySelectorAll('.second-hand');
const minHand = document.querySelectorAll('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hourHandNewYork = document.getElementById('New_York');
const hourHandLondon = document.getElementById('London');
const hourHandPari = document.getElementById('Pari');
const hourHandShanghai = document.getElementById('Shanghai');
const hourHandTokyo = document.getElementById('Tokyo');
const time = document.querySelector('.time'); 
const day = document.querySelector('.date');
const body = document.querySelector('body');


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    for (let i = 0; i < secondHand.length; i++) {
        secondHand[i].style.transform = `rotate(${secondsDegrees}deg)`;
    };

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;

    for (let j = 0; j < minHand.length; j++) {
        minHand[j].style.transform = `rotate(${minsDegrees}deg)`;
    };

    const hour = now.getHours();
    const hourUTC = now.getUTCHours(); 

    const hourDegrees = (hour + mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const hourDegreesNewYork = ((hourUTC - 4) + mins / 60) * 30 + 90;
    hourHandNewYork.style.transform = `rotate(${hourDegreesNewYork}deg)`;

    const hourDegreesLondon = ((hourUTC + 1) + mins / 60) * 30 + 90;
    hourHandLondon.style.transform = `rotate(${hourDegreesLondon}deg)`;

    const hourDegreesPari = ((hourUTC + 2) + mins / 60) * 30 + 90;
    hourHandPari.style.transform = `rotate(${hourDegreesPari}deg)`;

    const hourDegreesShanghai = ((hourUTC + 8) + mins / 60) * 30 + 90;
    hourHandShanghai.style.transform = `rotate(${hourDegreesShanghai}deg)`;

    const hourDegreesTokyo = ((hourUTC + 9) + mins / 60) * 30 + 90;
    hourHandTokyo.style.transform = `rotate(${hourDegreesTokyo}deg)`;

    showTime();
};

setInterval(setDate, 1000)


function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours(); 
    if (hours >= 0 && hours < 6) {
        return "night";
    } else if (hours >= 6 && hours < 12) {
        return "morning";
    } else if (hours >= 12 && hours < 18) {
        return "day";
    } else if (hours >= 18 && hours < 24) {
        return "evening";
    }
};

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNum(1, 6);

function setBg() {
    timeOfDay = getTimeOfDay();
    if (timeOfDay === 'night') {
        document.documentElement.style.setProperty('--main-bg-color', 'white')
    }
    bgNum = randomNum.toString().padStart(2, '0');
    const img = new Image();
    img.src = `./img/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('./img/${timeOfDay}/${bgNum}.jpg')`;
    }
}
setBg();

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    getTimeOfDay();

}

function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDate = date.toLocaleDateString('en-GB', options);
    day.textContent = currentDate;

}
