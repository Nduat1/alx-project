# CURRENCY CONVERTER
Currency converter is a web application that allows users to convert between currencies, save favorite currency pairs and view historical exchange rates.

**Features**
Currency conversion - Convert between multiple currencies.
Multi-converter - Convert multiple currencies simultaneously.
Favorites - Save favorite currency paurs for quick access
Responsive Design - Optimized for all screen sizes.

**Table of Contents**
Installation
Usage
Technologies Used
Project Structure
Components Overview
Responsive Design
Contributing
License


**Installation**
  Clone the repository:
  bash
  Copy code
  git clone https://github.com/your-username/currency-converter.git
Navigate to the project directory:
  bash
  Copy code
  cd currency-converter
Install dependencies:
  bash
  Copy code
  npm install
Start the development server:
  bash
  Copy code
  npm start
Open the app in your browser at http://localhost:3000.


**Usage**
Navigate through the app using the navigation menu.
Home: Perform currency conversions.
Historical Rates: View past exchange rates for selected currencies.
Multi Converter: Convert multiple currencies at once.
Favorites: Save and manage favorite currency pairs.
Save your favorite currency pairs for quick access later.
Use the responsive interface on any device.


**Technologies Used**
React: Front-end library for building user interfaces.
React Router: For navigation between pages.
Tailwind CSS: For styling and responsive design.
Local Storage: For persisting data between sessions.
JavaScript (ES6+): Core programming language.
HTML5 & CSS3: Markup and styling.


**Components Overview**
Header.jsx
  -Displays the navigation menu.
  -Includes a collapsible menu for small screens.
Favorites.jsx
  -Allows users to save, view, and use favorite currency pairs.
  -Persists data using useLocalStorage.js.
Converter.jsx
  -Core component for converting currencies.
MultiConverter.jsx
  -Enables the conversion of multiple currencies at the same time.
useLocalStorage.js
  -Custom React hook for handling local storage operations.


**Contributing**
Contributions are welcome! To contribute:
  -Fork the repository.
  -Create a new branch:
   bash
   Copy code
   git checkout -b feature-name
  -Commit your changes:
   bash
   Copy code
   git commit -m "Add feature-name"
  -Push to the branch:
   bash
   Copy code
   git push origin feature-name
  -Submit a pull request.

**Acknowledgments
Thanks to Exchange Rate API for providing exchange rate data.
Special thanks to the React and Tailwind CSS communities.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
