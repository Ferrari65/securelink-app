import axios from "axios";

// URL da API do Google Safe Browsing (corrigida para usar template literal corretamente)
const apiKey = "AIzaSyBKeFCWFIvggGr3nkT-h98cnL2Sj8N98EA"; // Substitua pela sua chave da API
const googleSafeBrowsingAPI = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

// Função para verificar se a URL é segura
export const checkUrl = async (url) => {
  try {
    const requestBody = {
      client: {
        clientId: "your-client-id",
        clientVersion: "1.0.0",
      },
      threatInfo: {
        threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
        platformTypes: ["WINDOWS", "LINUX", "IOS", "ANDROID"],
        threatEntryTypes: ["URL"],
        threatEntries: [{ url: url }],
      },
    };

    // Faz a requisição à API do Google Safe Browsing
    const response = await axios.post(googleSafeBrowsingAPI, requestBody);

    // Se a resposta contiver uma correspondência, a URL é maliciosa
    if (response.data.matches && response.data.matches.length > 0) {
      return {
        status: "malicious",
        message: "A URL é maliciosa ou suspeita.",
      };
    }

    // Caso contrário, a URL é segura
    return {
      status: "safe",
      message: "A URL é segura.",
    };
  } catch (error) {
    console.error("Erro ao verificar a URL:", error);
    throw new Error("Erro ao verificar a URL.");
  }
};
