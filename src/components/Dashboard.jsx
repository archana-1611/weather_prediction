import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, Sun } from 'lucide-react';
import { getWeatherInfo } from '../api/weatherApi';
import './Dashboard.css';

const Dashboard = ({ currentData }) => {
  if (!currentData) return <div className="dashboard-loading">Loading weather data...</div>;

  const info = getWeatherInfo(currentData.weather_code);

  return (
    <div className="dashboard glass-panel animate-fade-in">
      <div className="dashboard-header">
        <div className="current-temp-wrapper">
          <h1 className="current-temp text-gradient">{Math.round(currentData.temperature_2m)}°</h1>
          <p className="current-condition">{info.text}</p>
        </div>
        <div className="weather-icon-large">
          <Cloud size={80} color="var(--accent-saffron)" className="floating-icon" />
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon"><Thermometer size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Feels Like</span>
            <span className="metric-value">{Math.round(currentData.apparent_temperature)}°</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><Wind size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Wind Speed</span>
            <span className="metric-value">{currentData.wind_speed_10m} km/h</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><Droplets size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Humidity</span>
            <span className="metric-value">{currentData.relative_humidity_2m}%</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><Sun size={20} /></div>
          <div className="metric-info">
            <span className="metric-label">Cloud Cover</span>
            <span className="metric-value">{currentData.cloud_cover}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
