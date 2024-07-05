import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AppIntro: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../assets/applogo.png")} style={styles.logo} />
      <Text style={[styles.letter, styles.letterT]}>T</Text>
      <Text style={[styles.letter, styles.letterO]}>O</Text>
      <Text style={[styles.letter, styles.letterD]}>D</Text>
      <Text style={[styles.letter, styles.letterO]}>O</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  letter: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  letterT: {
    color: "#e67e22",
  },
  letterO: {
    color: "white",
  },
  letterD: {
    color: "#e67e22",
  },
});

export default AppIntro;
