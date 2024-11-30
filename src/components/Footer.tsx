import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/popular">Popular cities</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
