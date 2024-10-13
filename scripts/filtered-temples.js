const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/5513d22a19c811eebaf2eeeeac1e7e438422c51d/full/320%2C/0/default"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila Philippines",
        dedicated: "1984, September, 25",
        area: 2478,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/320%2C/0/default"
    },
    {
        templeName: "San Diego California",
        location: "San Diego California, United States",
        dedicated: "1969, July, 16",
        area: 372398,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/320%2C/0/default"
    },
];

function createTempleCard(filteredTemples) {
    const templeContainer = document.querySelector(".temple");
    templeContainer.innerHTML = ""; // Clear existing cards
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

// filter temples
function filterTemples(category) {
    let filteredTemples = temples; 
    if (category === "old") {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year < 1900;
        });
    } else if (category === "new") {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0]);
            return year > 2000;
        });
    } else if (category === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (category === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    createTempleCard(filteredTemples);
}

// navlinks event listeners
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.textContent.toLowerCase();

        if (category === "home") {
            createTempleCard(temples); 
        } else {
            filterTemples(filterCategory); // apply filter
        }
    });
});

// initial display of all temples
createTempleCard(temples);
