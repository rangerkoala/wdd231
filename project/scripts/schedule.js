// If the hidden timestamp input exists (on the schedule page), set it.
const tsEl = document.getElementById("timestamp");
if (tsEl) {
    tsEl.value = new Date().toISOString();
}

// thank you page script 
const params = new URLSearchParams(window.location.search);
const output = document.getElementById("output");
if (output) {
    const fname = params.get("fname") || '';
    const lname = params.get("lname") || '';
    const email = params.get("email") || '';
    const phone = params.get("phone") || '';
    const appointment = params.get("appointmentdate") || '';
    const appPlace = params.get("app-place") || '';
    const appType = params.get("app-type") || '';
    const timestamp = params.get("timestamp") || '';

    output.innerHTML = `
        <p><strong>Nombre:</strong> ${fname}</p>
        <p><strong>Apellido:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Fecha y Hora:</strong> ${appointment}</p>
        <p><strong>Tipo de consulta:</strong> ${appType}</p>
        <p><strong>Lugar:</strong> ${appPlace}</p>
        <p><strong>Reserva:</strong> ${timestamp}</p>
    `;
}

//message card script for schedule page

const messageCard = document.querySelector('#message-card');

function displayMessageCard() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        messageCard.textContent = "¡Bienvenido! Agenda tu consulta con nosotros.";
        localStorage.setItem('lastVisit', now);
        return;
    }

    const timeElapsed = now - lastVisit;
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageCard.textContent = "¡De vuelta tan pronto! Agenda tu cita aquí.";
    } else if (days === 1) {
        messageCard.textContent = "Nos visitaste hace 1 día. ¿Listo para agendar tu cita?";
    } else {
        messageCard.textContent = `Nos visitaste hace ${days} días. ¿Listo para agendar tu cita?`;
    }

    localStorage.setItem('lastVisit', now);
}

displayMessageCard();