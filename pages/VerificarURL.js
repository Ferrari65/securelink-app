import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import { checkUrl } from "../services/urlService"; // Importando o serviço de verificação de URL

export default function VerificarURL() {
  const [url, setUrl] = useState(""); // Estado para armazenar a URL inserida
  const [status, setStatus] = useState(null); // Status da verificação (seguro ou malicioso)
  const [message, setMessage] = useState(""); // Mensagem que será exibida ao usuário

  const handleVerificar = async () => {
    if (!url) {
      Alert.alert("Erro", "Por favor, insira uma URL para verificar.");
      return;
    }

    try {
      const result = await checkUrl(url); // Chama a função de verificação de URL
      setStatus(result.status);
      setMessage(result.message);
    } catch (error) {
      setStatus("erro");
      setMessage("Erro ao verificar a URL.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Verificar URL</Text>

      <TextInput
        placeholder="Digite a URL"
        value={url}
        onChangeText={setUrl}
        style={{
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />

      <Button title="Verificar URL" onPress={handleVerificar} />

      {status && (
        <View style={{ marginTop: 20 }}>
          <Text>Status: {status}</Text>
          <Text>Mensagem: {message}</Text>
        </View>
      )}
    </View>
  );
}
