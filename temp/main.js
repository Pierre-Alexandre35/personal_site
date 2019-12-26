const daysCounter = document.querySelector(".count-days");

const hoursCounter = document.querySelector(".count-hours");

const minutesCounter = document.querySelector(".count-minutes");


const tick = () =>{

const now = new Date();

const release = new Date('January 1 2020 00:00:01');

const diff =  release.getTime() - now.getTime();


var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / 1000);


daysCounter.innerHTML = `${days}`;
hoursCounter.innerHTML = `${hours}`;
minutesCounter.innerHTML = `${minutes}`;
}

setInterval(tick, 1000);

tick();