import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Link href="/" style={styles.link}>
          <Text style={styles.text}>Home</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/popular" style={styles.link}>
          <Text style={styles.text}>Popular Cities</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },
  link: {
    textDecorationLine: "none",
  },
  text: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default Footer;
