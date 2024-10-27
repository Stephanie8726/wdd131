document.addEventListener("DOMContentLoaded", function () {
    // Update copyright year
    const copyrightYearElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear}`;
  
    // Update last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}
);

// Code for the hamburger menu
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.nav-header');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); 

    if (menuButton.textContent === '☰') {
        menuButton.textContent = '❌'; 
    } else {
        menuButton.textContent = '☰';
    }
});
