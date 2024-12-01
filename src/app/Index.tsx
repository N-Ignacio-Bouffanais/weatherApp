import React from "react";
import { Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import WeekWeather from "../components/WeekWeather";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

const Page: React.FC = () => {
  // const { data, isLoading, isError, error } = useWeatherData("London");

  // console.log(data)

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (isError) {
  //   return <Text>Error: </Text>;
  // }
  return (
    <>
      <View className="p-4">
        <Text className="text-lg font-bold">Home Page</Text>
      </View>
      <WeekWeather />
      <Footer />
    </>
  );
};

export default App;


