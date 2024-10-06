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

const temperatureC = 30;
const windSpeedKmh = 15;

function calculateWindChill(temperature, windSpeed) {
    // wind chill formula °C
    return (
        13.12 + 
        0.6215 * temperature - 
        11.37 * Math.pow(windSpeed, 0.16) + 
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1); 
}

function displayWindChill() {
    const windChillElement = document.querySelector(".wind-chill");

    // checking if conditions are met
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        
        // call the calculateWindChill function => display the result
        const windChill = calculateWindChill(temperatureC, windSpeedKmh);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// calling displayWindChill function when the page loads
window.onload = displayWindChill;
