export const loginUser = async (email, password) => {
  // Aqui você pode fazer uma chamada de API para autenticar
  if (email === "user@example.com" && password === "password123") {
    return { email };
  }
  return null;
};

export const registerUser = async (email, password) => {
  // Aqui você pode salvar os dados do usuário
  return { email };
};
