const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;