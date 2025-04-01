import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { saveData, getData } from "../services/storage";
import styles from "../src/style/cadastroStyle";

import { LinearGradient } from "expo-linear-gradient";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Carregar as fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  // Caso as fontes não estejam carregadas, exibe uma tela de carregamento
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleCadastro = async () => {
    if (email && senha) {
      try {
        const existingUsers = (await getData("users")) || [];

        const userExists = existingUsers.some((user) => user.email === email);

        if (userExists) {
          Alert.alert("E-mail já em uso", "Este e-mail já foi cadastrado.");
        } else {
          const newUser = { email, senha };
          const updatedUsers = [...existingUsers, newUser];

          await saveData("users", updatedUsers);

          Alert.alert(
            "Cadastro concluído!",
            "Sua conta foi criada com sucesso."
          );
        }
      } catch (error) {
        console.error("Erro ao salvar os dados", error);
      }
    } else {
      Alert.alert("Erro", "Preencha todos os campos!");
    }
  };

  return (
    <ImageBackground
      source={require("../src/img/fundoLogin.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.cardForm}>
        <Text style={styles.titleStyle}>Cadastro</Text>

        {/* Campo E-mail */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={17} color="#636363" />
          <TextInput
            style={[
              styles.input,
              { fontFamily: "Poppins_400Regular", color: "white" },
            ]} // Aplicando a cor branca
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={17} color="#636363" />
          <TextInput
            style={[
              styles.input,
              { fontFamily: "Poppins_400Regular", color: "white" },
            ]} // Aplicando a cor branca
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Linear Gradient no fundo do botão */}
        <LinearGradient
          colors={["#ff6600", "#ff9900"]} // Cores do gradiente
          style={styles.button} // Usando o estilo já existente para o botão
        >
          <TouchableOpacity
            onPress={handleCadastro}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.registerText}>
          Já tem uma conta?
          <Text style={styles.registerLink} onPress={() => navigation.goBack()}>
            {" "}
            Faça Login
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
