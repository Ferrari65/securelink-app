import { StyleSheet, Platform } from "react-native";

const verificarURLStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },

  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
  },

  historicoBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  historicoText: {
    color: "#AAA",
    marginLeft: 6,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },

  inputLabel: {
    color: "#aaa",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: "100%",
    height: 48,
  },

  input: {
    flex: 1,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    paddingLeft: 10,
    ...(Platform.OS === 'web' && {
      outlineStyle: 'none',
    }),
  },

  searchIcon: {
    padding: 6,
    color: "#7D7D7D",
  },

  button: {
    backgroundColor: "#FF6600",
    borderRadius: 20,
    width: 160,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
  },

  alertMessage: {
    color: "#FF3B30",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default verificarURLStyle;