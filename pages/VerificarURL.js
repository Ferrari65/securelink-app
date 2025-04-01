import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { checkUrl } from "../services/urlService";
import styles from "../src/style/VerificarURLStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import LogoContainer from "../components/Logo";

export default function VerificarURL() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const handleVerificar = async () => {
    if (!url) {
      Alert.alert("Erro", "Por favor, insira uma URL para verificar.");
      return;
    }

    try {
      const result = await checkUrl(url);
      setStatus(result.status);
      setMessage(result.message);

      if (result.status === "malicious") {
        const existing =
          JSON.parse(await AsyncStorage.getItem("maliciousLinks")) || [];

        // Verifica se o link já foi salvo
        const jaExiste = existing.some((item) => item.url === url);

        if (!jaExiste) {
          const updated = [
            ...existing,
            { url, date: new Date().toISOString() },
          ];
          await AsyncStorage.setItem("maliciousLinks", JSON.stringify(updated));
        }
      }
    } catch (error) {
      setStatus("erro");
      setMessage("Erro ao verificar a URL.");
    }
  };

  const handleHistorico = () => {
    navigation.navigate("Historico");
  };

  return (
    <View style={styles.container}>
      <LogoContainer />
      <View style={styles.logoContainer}></View>

      <TouchableOpacity style={styles.historicoBtn} onPress={handleHistorico}>
        <FontAwesome name="history" size={16} color="#AAA" />
        <Text style={styles.historicoText}>Histórico</Text>
      </TouchableOpacity>

      <Text style={styles.inputLabel}>Cole o Link para verificar riscos</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="https://exemplo.com"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={url}
          onChangeText={setUrl}
        />
        <FontAwesome name="search" size={16} style={styles.searchIcon} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerificar}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      {status === "malicious" && (
        <Text style={[styles.alertMessage, { color: "#FF3B30" }]}>
          <FontAwesome name="exclamation-triangle" size={14} color="#FF3B30" />{" "}
          URL Maliciosa!
        </Text>
      )}

      {status === "safe" && (
        <Text style={[styles.alertMessage, { color: "#32CD32" }]}>
          <FontAwesome name="check-circle" size={14} color="#32CD32" /> URL
          segura.
        </Text>
      )}

      {status === "erro" && (
        <Text style={[styles.alertMessage, { color: "#FFA500" }]}>
          <FontAwesome name="times-circle" size={14} color="#FFA500" /> Erro ao
          verificar a URL.
        </Text>
      )}
    </View>
  );
}
