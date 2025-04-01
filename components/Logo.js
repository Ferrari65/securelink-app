import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LogoContainer() {
  return (
    <View style={styles.logoWrapper}>
      <Image
        source={require("../src/img/logo.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    width: "120%",
    height: height * 0.2,
    backgroundColor: "#0A0A0A",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  logoImage: {
    width: width * 0.6,
    height: "100%",
  },
});
