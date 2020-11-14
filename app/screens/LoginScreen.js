import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View elevation={5} style={styles.loginBox}></View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", //Centers along X-axis
    alignItems: "center", //Centers along Y axis
  },
  loginBox: {
    flex: 0.8,
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    width: "75%",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
