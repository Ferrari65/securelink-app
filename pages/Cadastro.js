import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { saveData, getData } from "../services/storage"; // Funções de salvamento e recuperação de dados

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (email && senha) {
      try {
        // Recupera todos os usuários já cadastrados
        const existingUsers = (await getData("users")) || []; // Se não houver usuários, começa com array vazio

        // Verifica se o e-mail já existe
        const userExists = existingUsers.some((user) => user.email === email);

        if (userExists) {
          Alert.alert("E-mail já em uso", "Este e-mail já foi cadastrado.");
        } else {
          // Adiciona o novo usuário ao array de usuários
          const newUser = { email, senha };
          const updatedUsers = [...existingUsers, newUser];

          // Salva o array de usuários atualizado
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
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Cadastro</Text>
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
      <Button title="Cadastrar" onPress={handleCadastro} />

      {/* Botão para voltar à tela de Login */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "blue", textAlign: "center" }}>
          Já tem uma conta? Faça Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
