document.addEventListener("DOMContentLoaded", function () {
  //copyright year
  const copyrightYearElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightYearElement.textContent = `© ${currentYear}`;

  //last modified date
  const lastModifiedElement = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

  //header
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

  function createH1Section() {
      const aboutHTML = `
          <h1>Pajo's Best - Reservation Form</h1>         
      `;
      document.getElementById("h1-section").innerHTML = aboutHTML;
  }

  createH1Section();

  //form
  function createForm() {
      const formHTML = `
          <form id="contact-form" method="get" action="reserve.html" class="reserve">
              <label for="firstName">First Name* <input type="text" id="firstName" name="fname" required></label>
              <label for="lastName">Last Name* <input type="text" id="lastName" name="lname" required></label>
              <label for="email">Email <input type="email" id="email" name="email" placeholder="Your email address" required></label>
              <label for="phone">Mobile Phone* <input type="tel" id="phone" name="phone" required
                  pattern="[0-9]{10,12}" title="Please enter a valid phone number (10-12 digits)"></label>
              <label for="organization">Organization (optional) <input type="text" id="organization" name="organization"></label> <!-- Organization field is optional -->
              <legend>How many products do you want to reserve?*</legend>
              <select id="productCount" name="productCount" required>
                  <option value="" disabled selected>▼</option>
              </select>
              <legend>Which products do you want to reserve?*</legend>
              <label><input type="checkbox" name="products" value="Spanish Bangus">Spanish Bangus</label>
              <label><input type="checkbox" name="products" value="Shrimp Paste">Shrimp Paste</label>
              <label><input type="checkbox" name="products" value="Peanut Butter">Peanut Butter</label>
              <label><input type="checkbox" name="products" value="Banana Chips">Banana Chips</label>
              <button type="submit">Contact Us for Reservation</button>
              <div id="form-response"></div>
          </form>
      `;
      document.getElementById("form-container").innerHTML = formHTML;

      //populate select items
      const productCountSelect = document.getElementById("productCount");
      const counts = Array.from({ length: 1000 }, (_, i) => i + 1);
      counts.forEach(count => {
          const option = document.createElement("option");
          option.value = count;
          option.textContent = count;
          productCountSelect.appendChild(option);
      });

      //form submission
      document.getElementById("contact-form").addEventListener("submit", function (event) {
          event.preventDefault();

          const firstName = document.getElementById("firstName").value;
          const email = document.getElementById("email").value;
          const organization = document.getElementById("organization").value;

          const selectedProducts = Array.from(
              document.querySelectorAll('input[name="products"]:checked')
          ).map((input) => input.value);

          if (firstName && email && selectedProducts.length > 0) {
              const formData = { firstName, email, organization, selectedProducts };
              localStorage.setItem("contactForm", JSON.stringify(formData));

              //redirect to the reserve file
              window.location.href = "pajos-reserve-form.html";
          } else {
              let errorMessage = 'Please fill out all required fields.';
              if (selectedProducts.length === 0) {
                  errorMessage += ' You must select at least one product.';
              }
              document.getElementById("form-response").innerHTML = `
                  <p>${errorMessage}</p>
              `;
          }
      });
  }

  createForm();
});