import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import ButtonComponent from "../../components/ButtonComponent";
import LogoComponent from "../../components/LogoComponent";
import TextInputComponent from "../../components/TextInputComponent";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <LogoComponent
          containerStyle={styles.backgroundContainer}
          logoStyle={styles.logo}
        ></LogoComponent>

        <View elevation={5} style={styles.loginBox}>
          <View style={styles.innerLoginBoxContainer}>
            <Text style={styles.header}> Sign In </Text>
            <TextInputComponent
              style={styles.textInput}
              label="Email"
            ></TextInputComponent>
            <TextInputComponent
              style={styles.textInput}
              label="Password"
            ></TextInputComponent>
            <Text style={styles.grayText}> Forgot Password? </Text>

            <ButtonComponent text="Login"> </ButtonComponent>
            <Text style={{ textAlign: "center" }}>
              Don't have an account? Register
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", //Centers along X-axis
    alignItems: "center", //Centers along Y axis
  },
  loginBox: {
    flex: 0.9,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "85%",
    backgroundColor: "rgba(255,255,255,0.5)",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  textInput: {
    marginTop: 10,
  },
  innerLoginBoxContainer: {
    flex: 1.0,
    margin: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
  backgroundContainer: {
    flex: 0.5,
    alignContent: "center",
    alignItems: "center",
    top: 50,
  },
  logo: {
    height: 100,
    width: 100,
  },
  smallBoldText: {
    fontWeight: "bold",
  },
  grayText: {
    color: "gray",
    textAlign: "right",
  },
});
