import { useQuery } from "react-query";
import axios from "axios";

export const useWeatherData = (city: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["weather", city],
    async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51c3090bbd78189b9992b04fe3b669ad`
      );
      return response.data;
      1;
    }
  );

  return { data, isLoading, isError, error };
};
