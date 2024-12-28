import api from "./api";

class OrderService {
  async createOrder() {
    const response = await api.post("/order");
    return response.data;
  }

  async getOrders() {
    const response = await api.get("/order");
    return response.data;
  }
}

export default new OrderService();
