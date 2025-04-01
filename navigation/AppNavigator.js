import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../src/context/AuthContext";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import VerificarURL from "../pages/VerificarURL";
import Historico from "../pages/Historico"; 

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
  
          <>
            <Stack.Screen name="VerificarURL" component={VerificarURL} />
            <Stack.Screen name="Historico" component={Historico} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Cadastro} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
