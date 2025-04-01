import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../src/style/historicoStyle";

export default function Historico() {
  const [links, setLinks] = useState([]);
  const navigation = useNavigation();

  const carregarLinks = async () => {
    const saved = await AsyncStorage.getItem("maliciousLinks");
    if (saved) {
      setLinks(JSON.parse(saved).reverse());
    }
  };

  useEffect(() => {
    carregarLinks();
  }, []);

  const removerLink = async (urlParaRemover) => {
    const atualizado = links.filter((item) => item.url !== urlParaRemover);
    await AsyncStorage.setItem("maliciousLinks", JSON.stringify(atualizado));
    setLinks(atualizado);
  };

  const limparHistorico = async () => {
    Alert.alert("Confirmar", "Deseja realmente limpar o histórico?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Limpar",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("maliciousLinks");
          setLinks([]);
        },
      },
    ]);
  };

  const voltar = () => {
    navigation.goBack(); // Volta para VerificarURL
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.voltarBtn} onPress={voltar}>
        <FontAwesome name="arrow-left" size={16} color="#AAA" />
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Histórico de Links Maliciosos</Text>

      {links.length === 0 ? (
        <Text style={styles.emptyText}>
          Nenhum link malicioso registrado ainda.
        </Text>
      ) : (
        <FlatList
          data={links}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={styles.url}>{item.url}</Text>
                <Text style={styles.date}>
                  Verificado em: {new Date(item.date).toLocaleString()}
                </Text>
              </View>
              <TouchableOpacity onPress={() => removerLink(item.url)}>
                <FontAwesome name="trash" size={20} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {links.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={limparHistorico}>
          <Text style={styles.clearButtonText}>Limpar Tudo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
