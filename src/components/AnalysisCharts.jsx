import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './AnalysisCharts.css';

const AnalysisCharts = ({ hourlyData }) => {
  if (!hourlyData) return null;

  // Format the data for the next 24 hours
  const formatData = () => {
    const data = [];
    const now = new Date();
    const currentHour = now.getHours();

    for (let i = 0; i < 24; i++) {
      const timeIndex = currentHour + i;
      const date = new Date(hourlyData.time[timeIndex]);
      
      data.push({
        time: date.getHours() + ':00',
        temp: Math.round(hourlyData.temperature_2m[timeIndex]),
        humidity: hourlyData.relative_humidity_2m[timeIndex],
        wind: hourlyData.wind_speed_10m[timeIndex]
      });
    }
    return data;
  };

  const chartData = formatData();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-time">{label}</p>
          <p className="tooltip-temp">{payload[0].value}°C</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="analysis-charts glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h3 className="section-title">24-Hour Temperature Forecast</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent-saffron)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--accent-saffron)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="temp" 
              stroke="var(--accent-saffron)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorTemp)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisCharts;
