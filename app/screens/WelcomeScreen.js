//Shortcut to set this up is by typing 'rsf'

import React from "react";

import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.backgroundContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          ></Image>
          <Text> Sell What You Don't Need</Text>
        </View>

        <View style={styles.loginButton}>
          <Button color="#fc5c65" title="Login" />
        </View>

        <View style={styles.registerButton}>
          <Button color="#4ecdc4" title="Register"></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    height: 100,
    width: 100,
  },
  backgroundContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    top: 50,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
