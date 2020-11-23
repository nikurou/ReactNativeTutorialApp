import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const LogoComponent = ({ containerStyle, logoStyle }) => {
  return (
    <View style={containerStyle}>
      <Image
        source={require("../app/assets/logo-red.png")}
        style={logoStyle}
      ></Image>
      <Text style={styles.smallBoldText}> Sell What You Don't Need</Text>
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  smallBoldText: {
    fontWeight: "bold",
  },
});
