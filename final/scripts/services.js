// Modal functionality

const buttons = document.querySelectorAll(".open-modal");
const modals = document.querySelectorAll(".modal");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.modal;
        document.getElementById(id).style.display = "block";
    });
});

modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close") || e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// reviews cards functionality

const clientsUrl = 'https://rangerkoala.github.io/wdd231/final/data/reviews.json';

async function getClientReviews() {
    try {
        const response = await fetch(clientsUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch members: ${response.status}`);
        }
        const data = await response.json();

        // Randomly select 3 clients
        const randReviews = getRandomClients(data.reviews, 3);
        
        displayReviews(randReviews);
    } catch (error) {
        console.error('Error loading client reviews:', error);
    }
}

function getRandomClients(array, count) {
    // Shuffle array and take first 'count' items
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('review-cards');
    
    if (!reviewsContainer) {
        console.error('Reviews container not found');
        return;
    }
    
    reviewsContainer.innerHTML = '';
    
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.classList.add('review-card');
        
        card.innerHTML = `
            <h3>${review.nombre}</h3>
            <p class='review-place'>${review.lugar_consulta}</p>
            <p><strong>Servicio:</strong> ${review.tipo_servicio}</p>
            <p><i>"${review.testimonio}"</i></p>
        `;
        
        reviewsContainer.appendChild(card);
    });
}

// Fetch and display reviews on page load
getClientReviews();