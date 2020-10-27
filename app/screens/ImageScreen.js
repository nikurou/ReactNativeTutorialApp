import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
    top: 50,
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    top: 50,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});
export default ImageScreen;
