document.addEventListener("DOMContentLoaded", function () {
    //copyright year
    const copyrightYearElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear}`;

    //last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
});

//header
function createHeader() {
    const headerHTML = `
        <div id="menu-button" class="menu-toggle">☰</div>
        <nav class="nav-header">
            <ul>
                <li><a href="pajos-best.html">Home</a></li>
                <li><a href="pajos-products.html" target="_blank">Products</a></li>
                <li><a href="pajos-contact.html" target="_blank">Contact Us</a></li>
            </ul>
        </nav>
    `;

    document.getElementById("nav-header").innerHTML = headerHTML;

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
}

function createAboutSection() {
    const aboutHTML = `
<img src="images/spanish-bangus.webp" alt="Pajo's Best Image" class="pajo-hero-img" loading="lazy" width="600" height="400">
        <h1>Pajo's Best - Special Spanish Bangus</h1>
        <p>
            Pajo’s Best offers a delightful selection of locally produced goods, including Special Spanish Bangus,
            Shrimp Paste, Peanut Butter, and Banana Chips. Each product is crafted with care and dedication,
            ensuring the highest quality and taste. This business was launched in May of this year, organized by
            the leaders of the Church of Jesus Christ of Latter-day Saints Relief Society, Pajo Ward.
            The initiative aims to support the livelihood of all members, providing them with an opportunity to
            contribute to their community. The profits generated from sales are used to assist members in need,
            including the poor and needy. Additionally, a portion of the profits is allocated to fund monthly 
            Relief Society activities, fostering a sense of community and support.
        </p>          
        <h2>About Our Team</h2>
    `;

    document.getElementById("about-section").innerHTML = aboutHTML;
}

//team data
const teamOrganizers = [
    {
        name: "Mary Ann Duero",
        url: "images/ann.webp",
        role: "Production",
        description: "Oversees the production process, ensuring that all products meet our high standards of quality and freshness."
    },
    {
        name: "Stephanie D. Selanoba",
        url: "images/steph.webp",
        role: "Sales and Orders",
        description: "Ensures that all sales and orders are handled efficiently and that customers receive the best service."
    },
    {
        name: "Celina Casinilio",
        url: "images/cecil.webp",
        role: "Marketing",
        description: "Responsible for marketing and promoting Pajo's Best Delights, connecting our products to the community."
    }
];

function createTeamSection() {
    const teamSection = document.getElementById('team-section');

    teamOrganizers.forEach(member => {
        const memberHTML = `
            <figure class="team-member">
 <img src="${member.url}" alt="${member.name}" class="team-member-img" loading="lazy" onerror="this.onerror=null; this.src='images/default-image.jpg';" width="150" height="150">                <figcaption>
                <p><strong>${member.name}</strong> <i>(${member.role})</i></p>
                <p>${member.description}</p>
                </figcaption>
            </figure>
        `;
        teamSection.innerHTML += memberHTML;
    });
}

window.onload = function() {
    createHeader(); 
    createAboutSection(); 
    createTeamSection(); 
};
