import { StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const historicoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
    textAlign: "center",
  },

  item: {
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  url: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },

  date: {
    color: "#aaa",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },

  emptyText: {
    color: "#aaa",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginTop: 30,
  },

  clearButton: {
    backgroundColor: "#FF6600",
    borderRadius: 20,
    width: width * 0.5,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },

  clearButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
  },

  item: {
    flexDirection: "row", //
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  voltarBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2C2C2E",
    borderRadius: 20,
  },

  voltarText: {
    color: "#AAA",
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});

export default historicoStyle;
