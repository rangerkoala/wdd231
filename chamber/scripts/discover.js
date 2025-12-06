import { locations } from '../data/locations.mjs';

const locationsContainer = document.getElementById('locations-grid');

function renderLocations() {
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.classList.add('location-card');

        locationCard.innerHTML = `
            <h2>${location.name}</h2>
            <figure>
                <img src="${location.image}" alt="Image of ${location.name}" loading="lazy">
            </figure>
            <address>${location.address}</address>
            <p>${location.description}</p>
            <button onclick="window.open('${location.link}', '_blank')">Learn more</button>
        `;

        locationsContainer.appendChild(locationCard);
    });
}

renderLocations();

const messageCard = document.querySelector('#message-card');

function displayMessageCard() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        messageCard.textContent = "Welcome! Let us know if you have any questions.";
        localStorage.setItem('lastVisit', now);
        return;
    }

    const timeElapsed = now - lastVisit;
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageCard.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageCard.textContent = "ou last visited 1 day ago.";
    } else {
        messageCard.textContent = `You last visited ${days} days ago.`;
    }

    localStorage.setItem('lastVisit', now);
}

displayMessageCard();