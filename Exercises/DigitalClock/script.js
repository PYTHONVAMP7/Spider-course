
const hoursElement = document.querySelector('#hour');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const monthsElement = document.querySelector('#months');
const dayElement = document.querySelector('#day');
const yearElement = document.querySelector('#year');

const month = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];   



setInterval(() => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    let months = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    let hour = hours%12
    hour = String(hour).padStart(2, "0");


    hoursElement.textContent = hour+":";

    minutesElement.textContent = minutes+":";
    secondsElement.textContent = seconds;

    monthsElement.textContent = month[months]+"/";

    dayElement.textContent = day+"/";
    yearElement.textContent = year



}, 100);
