import React, { useEffect, useState } from "react"; 
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../src/style/historicoStyle";

export default function Historico() {
  const [links, setLinks] = useState([]);
  const navigation = useNavigation();

  const carregarLinks = async () => {
    try {
      const saved = await AsyncStorage.getItem("maliciousLinks");
      if (saved) {
        setLinks(JSON.parse(saved).reverse());
      } else {
        setLinks([]);
      }
    } catch (error) {
      console.error("Erro ao carregar os links:", error);
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

  const voltar = () => {
    navigation.goBack(); 
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
    </View>
  );
}
