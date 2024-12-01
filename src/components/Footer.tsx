import { Link } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Link href="/" style={styles.link}>
          <Ionicons style={styles.text} name="home" size={32} color="blue" />
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/popular" style={styles.link}>
          <Ionicons style={styles.text} name="options" size={32} color="black" />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 25,
    height: "10%",
    width: "100%",
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
