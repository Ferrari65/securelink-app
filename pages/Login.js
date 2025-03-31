import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getData } from "../services/storage"; // Função de recuperação de dados

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha ambos os campos.");
      return;
    }

    try {
      // Recupera todos os usuários armazenados no AsyncStorage
      const users = (await getData("users")) || []; // Garantindo que seja um array vazio se não houver dados

      // Verifica se algum usuário tem o email e a senha correspondentes
      const user = users.find(
        (user) => user.email === email && user.senha === senha
      );

      if (user) {
        // Usuário encontrado, redireciona para a tela de verificação de URL
        navigation.navigate("URLVerification");
      } else {
        // Exibe alerta se e-mail ou senha estiverem incorretos
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
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Login</Text>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={{
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
      />
      <Button title="Entrar" onPress={handleLogin} />

      {/* Botão para cadastrar */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "blue", textAlign: "center" }}>
          Não tem uma conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}
