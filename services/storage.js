import AsyncStorage from "@react-native-async-storage/async-storage";

// Função segura para fazer parse de dados
const safeParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Erro ao parsear dados", e);
    return []; // Retorna um array vazio caso ocorra erro ao parsear
  }
};

// Função para salvar os dados (usuário)
export const saveData = async (key, data) => {
  try {
    // Armazena os dados no AsyncStorage
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erro ao salvar dados no AsyncStorage", error);
  }
};

// Função para obter os dados do AsyncStorage
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    // Faz o parse seguro dos dados ou retorna um array vazio se não houver dados
    const parsedData = data ? safeParse(data) : [];
    console.log("Dados recuperados com sucesso", parsedData);
    return parsedData;
  } catch (error) {
    console.error("Erro ao obter dados", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

// Função para limpar os dados armazenados
export const clearData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Dados com a chave ${key} removidos com sucesso.`);
  } catch (error) {
    console.error("Erro ao limpar dados", error);
  }
};
