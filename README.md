# API-INTEGRATION

# 🌦 Dynamic Weather App

The **Dynamic Weather App** is a responsive, interactive, and beginner-friendly project that allows users to check real-time weather information for any city across the globe. This application is built using **HTML, CSS, and  JavaScript** and fetches live data from the **OpenWeatherMap API**.  

It is designed to be simple enough for beginners to understand yet powerful enough to demonstrate real-world API integration and DOM manipulation techniques. The app has an intuitive interface, beautiful styling with gradient backgrounds, and a “previously searched cities” feature that makes it more user-friendly.

---

## 📜 Project Description

In today’s world, weather applications have become a part of daily life. Whether you are traveling, going to work, or just planning your day, knowing the weather forecast can help you prepare in advance. This project is a practical implementation of using **REST APIs** in a front-end application without any backend server. The app demonstrates the process of fetching data from an external API, handling responses, updating the DOM dynamically, and storing data locally for a better user experience.

When a user enters a city name into the input field and clicks the “Get Weather” button, the app sends a request to the OpenWeatherMap API endpoint using the city name as a parameter. The API responds with weather data in JSON format, which includes:
- Current temperature
- Humidity
- Wind speed
- Weather condition description (like “clear sky”, “light rain”, etc.)
- An icon representing the weather condition

The app processes this data and updates the UI to display the weather details. It also sets an appropriate weather icon by retrieving it from the OpenWeatherMap icon library.

One of the useful features of this app is the ability to **remember previously searched cities** using the browser’s `localStorage`. When the page loads, it checks if there are any saved cities in `localStorage`. If found, they are displayed as clickable buttons. Clicking on one of these buttons fetches and displays the weather for that city again, without requiring the user to type the name again.

The application also handles errors gracefully. If the user enters an invalid city name or if the API request fails, an error message is displayed clearly on the screen. This ensures that users understand what went wrong and can try again.

The UI is designed with a **modern, responsive layout** that works well on desktops, tablets, and mobile devices. The background uses a smooth gradient effect, and the weather display container has a frosted glass effect with a subtle shadow for a premium feel. The input and button elements are styled for accessibility and ease of use. On hover, the buttons change color for better interactivity feedback.

From a learning perspective, this project teaches:
1. How to use the `fetch()` API to get data from an external server.
2. How to parse and work with JSON data.
3. How to manipulate the DOM dynamically with JavaScript.
4. How to handle and display errors in a user-friendly way.
5. How to use `localStorage` to store and retrieve data.
6. How to apply modern CSS design techniques for UI/UX.

Since the project does not require a backend server, it can be hosted easily on GitHub Pages, Netlify, or Vercel. The only requirement is an internet connection and a valid OpenWeatherMap API key, which is free to obtain.

Overall, the Dynamic Weather App is not just a small coding exercise; it’s a complete project that combines **API usage, DOM manipulation, responsive UI design, and local data storage** into a single practical tool. It’s ideal for students, beginners in web development, or anyone who wants to quickly check the weather in different cities with a clean, modern interface.

---

## ✨ Features
- Search weather by city name
- Real-time weather data
- Dynamic weather icons
- Previous searches stored locally
- Gradient background with frosted glass effect
- Error handling for invalid inputs
- Fully responsive design

---

## 🛠 Technologies Used
- HTML5
- CSS3
- JavaScript 
- OpenWeatherMap API
- LocalStorage

---

## 🚀 How to Run the App
1. Clone the repository
2. Get your OpenWeatherMap API key
3. Add the API key in `script.js`
4. Open `index.html` in a browser

---

## 📂 Project Structure
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## 🔮 Future Improvements
- Add 5-day forecast
- Add dynamic background images
- Show sunrise/sunset times
- Support Celsius/Fahrenheit switch
- Multi-language support

---




#OUTPUT
<img width="1259" height="866" alt="Image" src="https://github.com/user-attachments/assets/453f88f6-edfc-40b5-aab6-0f6f9f7fe44f" />

<img width="1040" height="764" alt="Image" src="https://github.com/user-attachments/assets/42af3d45-f747-4e9d-8754-920a4b255d47" />
