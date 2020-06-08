const weather = document.querySelector('.temp span:nth-child(1)');
const temp = document.querySelector('.temp span:nth-child(2)');
const locate = document.querySelector('.location');

const API_KEY = '846e07cbcc3b6b4845b1be8ca51e8c7c';
const COORDS = 'coords';

function getWeather(lat, lon) {
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`).then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        const description = json.weather[0].description;
        console.log(description);
        temp.innerText = `${Math.floor(temperature)}`;
        locate.innerText = `${place}`;
        weather.innerText = `${description}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();