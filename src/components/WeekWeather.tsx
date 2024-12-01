import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const WeekWeather = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Tiempo en la semana</Text>
    </View>
    </>
  )
}

export default WeekWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "fffffff",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
});