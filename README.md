# 🌦️ AeroCast: Weather Data Analysis & Prediction (India Edition)

![AeroCast Banner](https://via.placeholder.com/1200x400/0f172a/06b6d4?text=AeroCast+Weather+Analysis)

Welcome to **AeroCast**, a premium, high-performance React application designed for real-time weather tracking, data analysis, and predictive modeling exclusively for Indian cities. Built with a stunning dark-glassmorphism aesthetic, AeroCast combines deep atmospheric data with intelligent trend summaries.

---

## ✨ What I Built

I developed this application from the ground up, focusing on robust data fetching, seamless user experience, and a custom, striking visual identity. My key contributions include:

- **Architected a Modern React App**: Bootstrapped with Vite for lightning-fast hot module replacement and optimized production builds.
- **Integrated Free Weather Data**: Hooked into the Open-Meteo API to fetch comprehensive real-time, hourly, and daily forecasting data without requiring expensive API keys.
- **Custom Indian Geocoding Search**: Implemented a search algorithm that specifically filters results to only show cities within India, ensuring a highly localized user experience.
- **Designed a Premium Glassmorphic UI**: Created a custom design system from scratch using pure CSS. It features a dark backdrop with dynamic blur effects (glassmorphism) and incorporates Saffron and Green accent colors to reflect an elegant Indian theme.
- **Built Interactive Data Visualizations**: Utilized `Recharts` to develop an interactive 24-hour temperature forecast chart complete with custom gradients and tooltips.
- **Developed an "AI" Prediction Engine**: Created a logic-based predictive summary card that analyzes the data payload to generate human-readable weather insights (e.g., detecting temperature drops and highlighting rain alerts).

---

## 🚀 Key Features

*   📍 **India-Centric Search**: Seamlessly look up current conditions for any city in India (defaults to New Delhi).
*   🌡️ **Real-Time Dashboard**: View current temperature, "feels like" temperature, wind speeds, humidity, and cloud cover at a glance.
*   📈 **24-Hour Trend Analysis**: Smooth, animated area charts showing exactly how the temperature will fluctuate over the next day.
*   🧠 **Smart Forecast Summaries**: Quick, actionable text summaries of tomorrow's weather compared to today's.
*   🎨 **Sleek Aesthetic**: Beautifully crafted floating icons, gradient text, and buttery-smooth micro-animations.

---

## 🛠️ Technology Stack

*   **Frontend Framework**: React 18
*   **Build Tool**: Vite
*   **Data Visualization**: Recharts
*   **Icons**: Lucide-React
*   **HTTP Client**: Axios
*   **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Animations)
*   **Data Provider**: Open-Meteo API (Geocoding & Forecast)

---

## 💻 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd "intern 2 proj 2"
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173/` or `http://localhost:5174/`).

---

## 💡 Future Enhancements

- [ ] Integrate local AQI (Air Quality Index) tracking which is highly relevant for Indian metropolitan areas.
- [ ] Add map integration with precipitation radar overlays.
- [ ] Implement a full multi-day detailed forecast page.

---
*Designed and built with ❤️.*
