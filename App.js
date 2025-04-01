import "react-native-gesture-handler";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import VerificarURL from "./pages/VerificarURL";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
