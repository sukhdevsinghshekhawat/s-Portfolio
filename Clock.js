document.addEventListener('DOMContentLoaded', () => {


    const todaytime = () => {


        const times = document.getElementById('time');
        const dates = document.getElementById('date');
        const ddmmyys = document.getElementById('ddmmyy');
        const hhmmsss = document.getElementById('hhmmss');
        let days = document.getElementById('day');

        const date = new Date();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let currentDate = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDay();

        hours = hours < 10 ? '0' + hours : hours;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        currentDate = currentDate < 10 ? '0' + currentDate : currentDate;
        month = month < 10 ? '0' + month : month;
        let string = hours <= 12 ? 'am' : 'pm';
        ddmmyys.innerHTML = `&nbspDD&nbsp&nbsp:&nbspMM&nbsp&nbsp:&nbspYY`;
        dates.innerHTML = `${currentDate}: ${month}: ${year}`;
        hhmmsss.innerHTML = `&nbspHR  &nbsp:  &nbspMIN  :  SEC`;
        times.innerHTML = `${hours}:${minute}:${second}:${string}`;
        switch (day) {
            case 0:
                days.innerHTML = 'SUN';
                break;
            case 1:
                days.innerHTML = 'MON';
                break;
            case 2:
                days.innerHTML = 'TUE';
                break;
            case 3:
                days.innerHTML = 'WED';
                break;
            case 4:
                days.innerHTML = 'THU';
                break;
            case 5:
                days.innerHTML = 'FRI';
                break;
            case 6:
                days.innerHTML = 'SAT';
                break;

            default:
                days.innerHTML = '';
        }
    }
    setInterval(todaytime, 1000);
});