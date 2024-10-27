document.addEventListener("DOMContentLoaded", function () {
    //copyright year
    const copyrightYearElement = document.getElementById("copyright");
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear}`;

    //last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

    //header with navigation
    function createHeader() {
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
        document.getElementById("nav-header").innerHTML = headerHTML;

        const menuButton = document.querySelector("#menu-button");
        const navigation = document.querySelector(".nav-header");

        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            menuButton.textContent = menuButton.textContent === "☰" ? "❌" : "☰";
        });
    }
    createHeader();

    const welcomeMessage = "Welcome to Pajo's Best Delights!";
    const welcomeElement = document.createElement('h1'); 
    welcomeElement.innerText = welcomeMessage; 
    document.getElementById('H1-message').appendChild(welcomeElement);
  
    const products = [
        { 
            name: "Special Spanish Bangus", 
            image: "images/spanish-bangus1.webp",
            price: "$15", 
            description: "A delicious, high-quality Spanish-style milkfish that's perfect for family meals." 
        },
        { 
            name: "Shrimp Paste", 
            image: "images/bagoong-alamang.webp",
            price: "$8", 
            description: "Authentic shrimp paste, ideal for enhancing the flavor of traditional dishes." 
        },
        { 
            name: "Peanut Butter", 
            image: "images/peanut-butter.webp",
            price: "$5", 
            description: "Creamy, homemade peanut butter, rich in taste and nutrients." 
        },
        { 
            name: "Banana Chips", 
            image: "images/banana-chips.webp",
            price: "$4", 
            description: "Crispy and sweet banana chips, a healthy snack choice for everyone." 
        }
    ];

    function displayProducts() {
        const productList = document.getElementById('product-list');
        let productHTML = "";

        if (products.length > 0) {
            products.forEach(product => {
                productHTML += `
                    <div class="product-item">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-image">
                        <h3>${product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                `;
            });
        } else {
            productHTML = "<p>No products available.</p>";
        }
        productList.innerHTML = productHTML;
    }

    //set localStorage
    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('visit-products').addEventListener('click', () => {
        window.location.href = "pajos-contact.html";
    });

    displayProducts();
});
