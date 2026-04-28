import React from 'react';
import { Sparkles, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
import './PredictionCard.css';

const PredictionCard = ({ dailyData }) => {
  if (!dailyData) return null;

  // Generate a mock "AI Prediction" based on the data
  const generatePrediction = () => {
    const todayTemp = dailyData.temperature_2m_max[0];
    const tomorrowTemp = dailyData.temperature_2m_max[1];
    const tempDiff = tomorrowTemp - todayTemp;
    
    const tomorrowPrecip = dailyData.precipitation_probability_max[1];

    let summary = "";
    let trend = "stable";

    if (Math.abs(tempDiff) > 3) {
      if (tempDiff > 0) {
        summary += `Expect a significant temperature increase of ${tempDiff.toFixed(1)}°C tomorrow. `;
        trend = "up";
      } else {
        summary += `Temperature will drop by ${Math.abs(tempDiff).toFixed(1)}°C tomorrow. `;
        trend = "down";
      }
    } else {
      summary += "Temperatures will remain relatively stable tomorrow. ";
    }

    if (tomorrowPrecip > 50) {
      summary += `High chance of precipitation (${tomorrowPrecip}%). Consider carrying an umbrella.`;
    } else if (tomorrowPrecip > 20) {
      summary += "Slight chance of rain.";
    } else {
      summary += "Clear skies expected.";
    }

    return { summary, trend, tomorrowPrecip };
  };

  const prediction = generatePrediction();

  return (
    <div className="prediction-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="prediction-header">
        <div className="ai-badge">
          <Sparkles size={16} />
          <span>AI Insight</span>
        </div>
        <h3 className="section-title" style={{ marginBottom: 0 }}>Tomorrow's Outlook</h3>
      </div>

      <div className="prediction-content">
        <p className="prediction-text">{prediction.summary}</p>
        
        <div className="prediction-indicators">
          <div className="indicator">
            {prediction.trend === 'up' ? <TrendingUp color="var(--accent-cyan)" /> : 
             prediction.trend === 'down' ? <TrendingDown color="var(--accent-green)" /> : 
             <TrendingUp color="var(--text-secondary)" />}
            <span>Temp Trend</span>
          </div>
          
          {prediction.tomorrowPrecip > 50 && (
            <div className="indicator warning">
              <AlertTriangle color="#fbbf24" />
              <span>Rain Alert</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="prediction-bg-effect"></div>
    </div>
  );
};

export default PredictionCard;
