// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(p => p.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter(p => p.id !== id);
    },
    clearCart() {
      this.items = [];
    }
  },
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }
});
