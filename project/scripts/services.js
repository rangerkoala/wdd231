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

// review cards functionality