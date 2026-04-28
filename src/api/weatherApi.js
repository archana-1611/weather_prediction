import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

/**
 * Search for a city to get its coordinates.
 */
export const searchCity = async (query) => {
  try {
    const response = await axios.get(GEOCODING_URL, {
      params: {
        name: query,
        count: 15,
        language: 'en',
        format: 'json'
      }
    });
    // Filter to only return Indian cities
    const results = response.data.results || [];
    return results.filter(city => city.country_code === 'IN' || city.country === 'India');
  } catch (error) {
    console.error("Error searching city:", error);
    throw error;
  }
};

/**
 * Fetch comprehensive weather data for a given location.
 */
export const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m',
        hourly: 'temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max',
        timezone: 'auto',
        past_days: 7, // Fetch past 7 days for analysis
        forecast_days: 7 // Fetch 7 days ahead for prediction
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Helper to interpret WMO weather codes into human-readable text and icon names
export const getWeatherInfo = (code) => {
  const codes = {
    0: { text: "Clear sky", icon: "Sun" },
    1: { text: "Mainly clear", icon: "Sun" },
    2: { text: "Partly cloudy", icon: "CloudSun" },
    3: { text: "Overcast", icon: "Cloud" },
    45: { text: "Fog", icon: "CloudFog" },
    48: { text: "Depositing rime fog", icon: "CloudFog" },
    51: { text: "Light drizzle", icon: "CloudDrizzle" },
    53: { text: "Moderate drizzle", icon: "CloudDrizzle" },
    55: { text: "Dense drizzle", icon: "CloudDrizzle" },
    61: { text: "Slight rain", icon: "CloudRain" },
    63: { text: "Moderate rain", icon: "CloudRain" },
    65: { text: "Heavy rain", icon: "CloudRain" },
    71: { text: "Slight snow", icon: "CloudSnow" },
    73: { text: "Moderate snow", icon: "CloudSnow" },
    75: { text: "Heavy snow", icon: "CloudSnow" },
    77: { text: "Snow grains", icon: "CloudSnow" },
    80: { text: "Slight rain showers", icon: "CloudRain" },
    81: { text: "Moderate rain showers", icon: "CloudRain" },
    82: { text: "Violent rain showers", icon: "CloudLightning" },
    95: { text: "Thunderstorm", icon: "CloudLightning" },
    96: { text: "Thunderstorm with slight hail", icon: "CloudLightning" },
    99: { text: "Thunderstorm with heavy hail", icon: "CloudLightning" }
  };
  return codes[code] || { text: "Unknown", icon: "Cloud" };
};
