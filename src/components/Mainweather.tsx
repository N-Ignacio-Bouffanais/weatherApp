import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Mainweather: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>  
    </View>
  );
};

export default Mainweather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});