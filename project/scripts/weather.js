const OWM_kEY = '89e423c3a473f74415f4b25396a85d1a';
const LAT = 4.6596;
const LON = -74.0925;
const UNITS = 'metric';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${OWM_kEY}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // pass data to the display function after successful fetch
            displayWeather(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const wtemp = document.getElementById('weather-temp');
    const wdes = document.getElementById('weather-des');
    const wicon = document.getElementById('weather-icon');

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    wicon.setAttribute('src', iconSrc);
    wicon.setAttribute('alt', data.weather[0].description);

    wtemp.textContent = `${Math.round(data.main.temp)} °C`;
    wdes.textContent = data.weather[0].description;
}

function displayForecast(data) {
    const fcContainer = document.getElementById('w-forecast');

    // clear any existing forecast items
    if (!fcContainer) return;
    fcContainer.innerHTML = '';

    // create a simple 3-day forecast using the current data and weekday names
    for (let i = 1; i <= 3; i++) {
        const dayForecast = document.createElement('div');
        dayForecast.classList.add('day-forecast');

        const forecastDate = new Date();
        forecastDate.setDate(forecastDate.getDate() + i);
        const dayName = forecastDate.toLocaleDateString(undefined, { weekday: 'long' });

        const day = document.createElement('h3');
        day.textContent = dayName;
        const temp = document.createElement('p');
        temp.textContent = `Temp: ${Math.round(data.main.temp) + i} °C`;

        dayForecast.appendChild(day);
        dayForecast.appendChild(temp);
        fcContainer.appendChild(dayForecast);
    }
}

apiFetch()
