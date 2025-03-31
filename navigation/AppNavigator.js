import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import VerificarURL from "../pages/VerificarURL";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Cadastro} />
        <Stack.Screen name="URLVerification" component={VerificarURL} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
