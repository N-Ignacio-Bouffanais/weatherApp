import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.Div_title}>
          <Text style={styles.title}>Santiago, CHILE</Text>
        </View>
        <WeekWeather />
      </View>

      <Footer />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2283ff",
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Div_title:{
    width: "80%",
  },
  title:{
    fontSize: 20,
    fontWeight: "semibold",
    color: "white",
    marginBottom: 20,
    textAlign: "left",
    
  }
});


