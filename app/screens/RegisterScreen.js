import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
