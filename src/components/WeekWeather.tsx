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
    display: 'flex',
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    width: "80%",
    height: "25%",
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
});