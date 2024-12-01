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
    padding: 24,
    width: "85%",
    height: "35%",
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
    textAlign: "left",
    width: "100%",
  },
});