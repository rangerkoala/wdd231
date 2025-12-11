import { members } from '../data/members.mjs';

const membersContainer = document.getElementById('team-grid');

function renderMembers() {
    members.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');

        teamCard.innerHTML = `
            <h3>${member.name}</h3>
            <figure>
                <img src="${member.image}" alt="Image of ${member.name}" loading="lazy">
                <figcaption>${member.title}</figcaption>
            </figure>
            <p>${member.description}</p>
        `;

        membersContainer.appendChild(teamCard);
    });
}

renderMembers();