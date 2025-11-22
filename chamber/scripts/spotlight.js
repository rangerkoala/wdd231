const membersUrl = 'https://rangerkoala.github.io/wdd231/chamber/data/members.json';

async function getSpotlightMembers() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch members: ${response.status}`);
        }
        const data = await response.json();
        
        // Filter members by gold (3) or silver (2) membership levels
        const premiumMembers = data.members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        
        // Randomly select 3 members
        const spotlights = getRandomMembers(premiumMembers, 3);
        
        displaySpotlights(spotlights);
    } catch (error) {
        console.error('Error loading spotlight members:', error);
    }
}

function getRandomMembers(array, count) {
    // Shuffle array and take first 'count' items
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-cards');
    
    if (!spotlightContainer) {
        console.error('Spotlight container not found');
        return;
    }
    
    spotlightContainer.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        
        const membershipLabel = member.membershipLevel === 3 ? 'Gold Member' : 'Silver Member';
        
        card.innerHTML = `
            <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy" width="150" height="auto">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${membershipLabel}</p>
        `;
        
        spotlightContainer.appendChild(card);
    });
}

// Fetch and display spotlights on page load
getSpotlightMembers();
