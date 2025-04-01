import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const loginstyle = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },

  cardForm: {
    width: "100%",
    maxWidth: 370,
    backgroundColor: "#2C2C2E",
    padding: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    position: "absolute",
    bottom: 0,
    height: height * 0.85, // 85% da altura da tela
  },

  titleStyle: {
    marginTop: 16,
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    fontFamily: "Poppins_400Regular",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#3B3B3F",
    marginTop: 12,
    marginBottom: 16,
    width: "100%",
    backgroundColor: "#2C2C2E",
  },

  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins_400Regular",
    ...(Platform.OS === "web" && {
      outlineStyle: "none",
      outlineWidth: 0,
    }),
  },

  button: {
    marginTop: 16,
    borderRadius: 30,
    overflow: "hidden",
    width: "70%",
    height: 50,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },

  registerText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 16,
  },

  registerLink: {
    color: "#ff6600",
    fontWeight: "bold",
    paddingLeft: 5,
  },
});

export default loginstyle;
