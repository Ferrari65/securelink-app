import axios from "axios";

// URL da API do Google Safe Browsing 
const apiKey = "AIzaSyBKeFCWFIvggGr3nkT-h98cnL2Sj8N98EA"; 
const googleSafeBrowsingAPI = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;

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

    const response = await axios.post(googleSafeBrowsingAPI, requestBody);


    if (response.data.matches && response.data.matches.length > 0) {
      return {
        status: "malicious",
        message: "A URL é maliciosa ou suspeita.",
      };
    }

    return {
      status: "safe",
      message: "A URL é segura.",
    };
  } catch (error) {
    console.error("Erro ao verificar a URL:", error);
    throw new Error("Erro ao verificar a URL.");
  }
};
