import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AnalysisCharts from './components/AnalysisCharts';
import PredictionCard from './components/PredictionCard';
import { searchCity, getWeatherData } from './api/weatherApi';
import './App.css';

function App() {
  const [currentLocation, setCurrentLocation] = useState({ name: 'New Delhi', lat: 28.6139, lon: 77.2090, country: 'India' });
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(currentLocation.lat, currentLocation.lon);
  }, [currentLocation]);

  const fetchWeather = async (lat, lon) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(lat, lon);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setIsSearching(true);
    setError(null);
    try {
      const results = await searchCity(query);
      if (results && results.length > 0) {
        const bestMatch = results[0];
        setCurrentLocation({
          name: bestMatch.name,
          lat: bestMatch.latitude,
          lon: bestMatch.longitude,
          country: bestMatch.country
        });
      } else {
        setError('City not found. Please try another search.');
      }
    } catch (err) {
      setError('Error searching for city.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar-layout">
        <Sidebar 
          onSearch={handleSearch} 
          currentLocation={currentLocation} 
          isSearching={isSearching} 
        />
      </div>
      
      <main className="main-content">
        {error && (
          <div className="error-banner glass-panel">
            <p>{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Gathering atmospheric data...</p>
          </div>
        ) : weatherData ? (
          <div className="dashboard-layout">
            <div className="dashboard-main-col">
              <Dashboard currentData={weatherData.current} />
              <div className="analysis-section">
                <AnalysisCharts hourlyData={weatherData.hourly} />
              </div>
            </div>
            
            <div className="dashboard-side-col">
              <PredictionCard dailyData={weatherData.daily} />
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
