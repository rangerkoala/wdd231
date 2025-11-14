const url = 'https://rangerkoala.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');

const listbutton = document.querySelector('#list')
const gridbutton = document.querySelector('#grid')

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
};

getMembersData();

cards.classList.add('grid');

gridbutton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
})

listbutton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
})

function displayMembers(members) {
    cards.innerHTML = "";

    members.forEach(member => {
        let card = document.createElement('section');

        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.innerHTML = `${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', 'auto');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}