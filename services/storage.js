import AsyncStorage from "@react-native-async-storage/async-storage";


const safeParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Erro ao parsear dados", e);
    return []; 
    }
};

export const saveData = async (key, data) => {
  try {

    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erro ao salvar dados no AsyncStorage", error);
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    const parsedData = data ? safeParse(data) : [];
    console.log("Dados recuperados com sucesso", parsedData);
    return parsedData;
  } catch (error) {
    console.error("Erro ao obter dados", error);
    return [];
  }
};

export const clearData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Dados com a chave ${key} removidos com sucesso.`);
  } catch (error) {
    console.error("Erro ao limpar dados", error);
  }
};
