import api from "./api";

class ProductsService {
  async getProducts() {
    const response = await api.get("/items");
    return response.data;
  }
}

export default new ProductsService();
