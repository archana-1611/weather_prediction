import React, { useState } from 'react';
import { Search, MapPin, Wind, Droplets, Sun, Activity } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onSearch, currentLocation, isSearching }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <aside className="sidebar glass-panel">
      <div className="logo-container">
        <Activity className="logo-icon" size={32} color="var(--accent-cyan)" />
        <h2 className="text-gradient">AeroCast</h2>
      </div>

      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search for a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <button type="submit" className="btn-primary search-btn" disabled={isSearching}>
          {isSearching ? '...' : 'Search'}
        </button>
      </form>

      <div className="location-info">
        <MapPin size={20} color="var(--accent-green)" />
        <div className="location-details">
          <h3>{currentLocation?.name || 'Unknown Location'}</h3>
          <p>{currentLocation?.country || 'Please search for a city'}</p>
        </div>
      </div>

      <div className="quick-stats">
        <h4 className="section-title">Quick Overview</h4>
        <div className="stat-item">
          <Wind size={18} />
          <span>Wind Analysis</span>
        </div>
        <div className="stat-item">
          <Droplets size={18} />
          <span>Precipitation Trends</span>
        </div>
        <div className="stat-item">
          <Sun size={18} />
          <span>UV Index Tracking</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
