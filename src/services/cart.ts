import api from "./api";

class CartService {
  async getCartItems() {
    const response = await api.get("/cart");
    return response.data;
  }

  async addToCart(productId: string) {
    const response = await api.post("/cart/" + productId);
    return response.data;
  }

  async removeFromCart(productId: string) {
    const response = await api.delete("/cart/" + productId);
    return response.data;
  }

  async clearCart() {
    const response = await api.delete("/cart");
    return response.data;
  }

  async updateCartItemQuantity(productId: string, quantity: number) {
    const response = await api.put("/cart/" + productId, { quantity });
    return response.data;
  }
}

export default new CartService();
