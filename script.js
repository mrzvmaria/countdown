//1) setting the end point of the timer:
let deadline = '2018-10-24';

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

        function addZero(num) {
            if (num <= 9) {
                return '0' + num;
            } else return num;
        };

        days.textContent = addZero(updatedTime.days);
        hours.textContent = addZero(updatedTime.hours);
        minutes.textContent = addZero(updatedTime.minutes);
        seconds.textContent = addZero(updatedTime.seconds);

        if (updatedTime.total <= 0) {
            clearInterval(timeInterval);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer', deadline);