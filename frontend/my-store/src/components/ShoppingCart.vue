<script setup>
import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

function proceedToCheckout() {
  if (!cartStore.items.length) {
    alert('Your cart is empty!');
    return;
  }
  router.push('/checkout');
}

function removeFromCart(id) {
  cartStore.removeFromCart(id);
}
</script>

<template>
  <div class="flex justify-center items-start min-h-[70vh]">
    <div class="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 mt-10">
      <h2 class="text-2xl font-bold mb-6 text-indigo-800 text-center">Shopping Cart</h2>
      <div v-if="cartStore.items.length === 0" class="text-center py-16 text-gray-400">
        Cart is empty.
      </div>
      <ul v-else>
        <li v-for="item in cartStore.items" :key="item.id" class="mb-4 border p-4 rounded-xl flex justify-between items-center shadow-sm">
          <div>
            <span class="font-medium text-lg">{{ item.name }}</span>
            <span class="ml-2 text-gray-500 text-sm">x{{ item.quantity }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-indigo-700 font-semibold text-lg">₹{{ item.price * item.quantity }}</span>
            <button class="text-red-500 text-xs font-semibold px-2 py-1 bg-red-50 hover:bg-red-100 rounded" @click="removeFromCart(item.id)">
              Remove
            </button>
          </div>
        </li>
      </ul>
      <div v-if="cartStore.items.length" class="mt-8 text-right font-bold text-xl">
        Total: ₹{{ cartStore.total }}
      </div>
      <div class="flex justify-center mt-6">
        <button
          @click="proceedToCheckout"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-xl font-semibold text-lg shadow transition"
          :disabled="cartStore.items.length === 0"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>
