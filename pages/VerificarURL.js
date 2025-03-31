import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { checkUrl } from "../services/urlService";
import styles from "../src/style/VerificarURLStyle";

import LogoContainer from '../components/Logo';

export default function VerificarURL() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleVerificar = async () => {
    if (!url) {
      Alert.alert("Erro", "Por favor, insira uma URL para verificar.");
      return;
    }

    try {
      const result = await checkUrl(url);
      setStatus(result.status);
      setMessage(result.message);
    } catch (error) {
      setStatus("erro");
      setMessage("Erro ao verificar a URL.");
    }
  };

  return (
    
    <View style={styles.container}>
       <LogoContainer />
      <View style={styles.logoContainer}>
      </View>

      <TouchableOpacity style={styles.historicoBtn}>
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
        <Text style={styles.alertMessage}>
          <FontAwesome name="exclamation-triangle" size={14} color="#FF3B30" /> URL Maliciosa!
        </Text>
      )}

      <Text style={styles.inputLabel}>Cole o e-mail suspeito aqui...</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="exemplo@email.com"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <FontAwesome name="search" size={16} style={styles.searchIcon} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
}
