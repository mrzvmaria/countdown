//1) setting the end point of the timer:
let deadline = '2020-10-24';

//2) founding out how much time is remained to the end point of the timer:
function getTimeRemaining(endpoint) {
    let remained = Date.parse(endpoint) - Date.parse(new Date()), 
        seconds = Math.floor((remained/1000) % 60), //remained time in seconds
        minutes = Math.floor((remained/1000/60) % 60), //remained time in minutes
        hours = Math.floor((remained/1000/60/60) % 60), //remained time in hours
        days = Math.floor((remained/(1000*60*60*24))); //remained time in days

    //return the Object of time values:
    return {
        'total' : remained,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

//3) changing values of time in HTML:
function setClock(id, endpoint) {
    let timer = document.getElementById(id),
        days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let updatedTime = getTimeRemaining(endpoint);
        days.textContent = updatedTime.days;
        hours.textContent = updatedTime.hours;
        minutes.textContent = updatedTime.minutes;
        seconds.textContent = updatedTime.seconds;

        if (remained.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);