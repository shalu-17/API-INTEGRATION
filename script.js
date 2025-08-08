// === Replace this with your OpenWeatherMap API key ===
const apiKey = "enter API KEY";

// === Get DOM elements ===
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const errorDiv = document.getElementById("error");
const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const previousCitiesDiv = document.getElementById("previousCities");

// === Store previously searched cities ===
let previousCities = [];

// === On page load, get previously searched cities from localStorage ===
window.onload = () => {
  const storedCities = JSON.parse(localStorage.getItem("previousCities"));
  if (storedCities && storedCities.length > 0) {
    previousCities = storedCities;
    renderPreviousCities(); // Render the buttons for past searches
  }
};

// === When the form is submitted ===
weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form from refreshing the page
  const city = cityInput.value.trim(); // Get user input

  if (!city) return; // If empty input, do nothing

  await fetchWeather(city); // Fetch weather data
});

// === Fetch weather data from OpenWeatherMap API ===
async function fetchWeather(city) {
  // Hide error and result sections initially
  errorDiv.classList.add("hidden");
  weatherResult.classList.add("hidden");

  try {
    // Fetch data using city name
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // Handle invalid response
    if (!response.ok) throw new Error("City not found. Please check the name.");

    const data = await response.json();

    // Update DOM with weather data
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    description.textContent = data.weather[0].description;
    temp.textContent = data.main.temp.toFixed(1);
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed.toFixed(1);

    // Set weather icon image
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    // Show the result section
    weatherResult.classList.remove("hidden");

    // === Store city in previous searches (if not already present) ===
    const cityAlreadySaved = previousCities.some(
      (c) => c.toLowerCase() === data.name.toLowerCase()
    );

    if (!cityAlreadySaved) {
      previousCities.unshift(data.name); // Add to beginning of array

      // Keep only last 5 cities
      if (previousCities.length > 5) previousCities.pop();

      // Save updated list to localStorage
      localStorage.setItem("previousCities", JSON.stringify(previousCities));

      // Re-render city buttons
      renderPreviousCities();
    }
  } catch (error) {
    // Display error message to user
    errorDiv.textContent = error.message;
    errorDiv.classList.remove("hidden");
  }
}

// === Display buttons for previously searched cities ===
function renderPreviousCities() {
  if (previousCities.length === 0) {
    previousCitiesDiv.classList.add("hidden");
    return;
  }

  // Show previousCities section
  previousCitiesDiv.classList.remove("hidden");

  // Remove all existing city buttons
  previousCitiesDiv.querySelectorAll(".city-btn").forEach((btn) => btn.remove());

  // Create a button for each city
  previousCities.forEach((city) => {
    const btn = document.createElement("button");
    btn.textContent = city;
    btn.className = "city-btn";

    // Fetch weather for that city when clicked
    btn.addEventListener("click", () => fetchWeather(city));

    // Add button to the DOM
    previousCitiesDiv.appendChild(btn);
  });
}
