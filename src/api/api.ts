import { useQuery } from "react-query";
import axios from "axios";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY; 

export const useWeatherData = (city: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["weather", city],
    async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      return response.data;
      1;
    }
  );

  return { data, isLoading, isError, error };
};
