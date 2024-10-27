document.addEventListener("DOMContentLoaded", function () {
    //copyright year
    const copyrightYearElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    if (copyrightYearElement) {
        copyrightYearElement.textContent = `© ${currentYear}`;
    }

    //last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
    }

    //header with nav
    function createHeader() {
        const navHeader = document.getElementById("nav-header");
        if (navHeader) {
            const headerHTML = `
                <div id="menu-button" class="menu-toggle">☰</div>
                <nav class="nav-header">
                    <ul>
                        <li><a href="pajos-best.html" target="_blank">Home</a></li>
                        <li><a href="pajos-products.html" target="_blank">Products</a></li>
                        <li><a href="pajos-contact.html">Contact Us</a></li>
                    </ul>
                </nav>
            `;
            navHeader.innerHTML = headerHTML;

            const menuButton = document.querySelector("#menu-button");
            const navigation = document.querySelector(".nav-header");

            if (menuButton && navigation) {
                menuButton.addEventListener("click", () => {
                    navigation.classList.toggle("open");
                    menuButton.textContent = menuButton.textContent === "☰" ? "❌" : "☰";
                });
            }
        } else {
            console.warn("Navigation header element not found.");
        }
    }

    function createReservationMessage() {
        const mainElement = document.querySelector("main");
        if (mainElement) {
            mainElement.classList.add("reservation-page");

            const h1Element = document.createElement("h1");
            h1Element.textContent = "Thank you for your reservation";
            h1Element.classList.add("reservation-h1"); 
            mainElement.appendChild(h1Element);
    
            const pElement = document.createElement("p");
            pElement.textContent = "We have received your reservation request and will get back to you shortly with the details. Please check your email and phone messages for confirmation and further instructions. Thank you!";
            pElement.classList.add("reservation-p"); 
            mainElement.appendChild(pElement);
        } else {
            console.warn("Main content element not found.");
        }
    }
    
    createHeader();
    createReservationMessage();
});
