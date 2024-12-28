import api from "./api";

class AuthService {
    async login(email: string, password: string) {
      try {
        const response = await api.post("/user/login", { email, password });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
      } catch (error) {
        throw error;
    }
  }

  async signup(name: string, email: string, password: string) {
    try {
            const response = await api.post("/user/signup", { name, email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
  }
}

export default new AuthService();
