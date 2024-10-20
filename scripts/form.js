const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function populateProductOptions() {
  const selectElement = document.getElementById("product-name");

  selectElement.innerHTML = ""; //clear existing option(choose a product...)

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "Choose a Product...▼";
  selectElement.appendChild(defaultOption);

  // append product option
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

// localStorage
function incrementReviewCount() {
  let reviewCount = localStorage.getItem("reviewCount") || 0; 
  reviewCount++; 
  localStorage.setItem("reviewCount", reviewCount); 
}

// total review count (review.html)
function displayReviewCount() {
  const reviewCount = localStorage.getItem("reviewCount") || 0;
  const reviewCountElement = document.getElementById("review-count"); 
  reviewCountElement.textContent = `Total reviews submitted: ${reviewCount}`; // update text content
}

function submitReview(event) {
  event.preventDefault();

  const selectedProduct = document.getElementById("product-name").value;
  const reviewText = document.getElementById("review").value;
  const userName = document.getElementsByName("username")[0].value || "Anonymous";

  // Store in localStorage
  const reviewData = {
    product: selectedProduct,
    review: reviewText,
    user: userName
  };

  // save review data => unique key (using timestamp) 
  localStorage.setItem(`review-${Date.now()}`, JSON.stringify(reviewData));
  
  incrementReviewCount();
  displayReviewCount();
  
  document.querySelector("form.review").reset(); // clear form after submission
}

document.addEventListener("DOMContentLoaded", () => {
  populateProductOptions();
  displayReviewCount(); 
});





