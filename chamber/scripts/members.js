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

