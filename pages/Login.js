import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getData } from "../services/storage";
import styles from "../src/style/loginStyle";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../src/context/AuthContext"; // ✅ Importa o contexto

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { setIsAuthenticated } = useAuth(); // ✅ Usa o setter do contexto

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha ambos os campos.");
      return;
    }

    try {
      const users = (await getData("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.senha === senha
      );

      if (user) {
        setIsAuthenticated(true); // ✅ Ativa o fluxo de navegação condicional
      } else {
        Alert.alert(
          "E-mail ou senha incorretos",
          "Verifique suas credenciais."
        );
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <ImageBackground
      source={require("../src/img/fundoLogin.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.cardForm}>
        <Text style={styles.titleStyle}>Login</Text>

        {/* E-mail */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={17} color="#636363" />
          <TextInput
            style={[
              styles.input,
              { fontFamily: "Poppins_400Regular", color: "white" },
            ]}
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={17} color="#636363" />
          <TextInput
            style={[
              styles.input,
              { fontFamily: "Poppins_400Regular", color: "white" },
            ]}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Botão */}
        <LinearGradient colors={["#ff6600", "#ff9900"]} style={styles.button}>
          <TouchableOpacity
            onPress={handleLogin}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.registerText}>
          Não tem uma conta?
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Cadastre-se
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
