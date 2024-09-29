document.addEventListener("DOMContentLoaded", function () {
    // Update copyright year
    const copyrightYearElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear}`;
  
    // Update last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

  // Code for the hamburger menu
  const menuButton = document.querySelector('#menu-button');
  const nav = document.querySelector('nav');

  menuButton.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuButton.classList.toggle('open');
  });
}
);