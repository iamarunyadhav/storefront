<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

const checkoutForm = ref({
  name: '',
  email: '',
  address: ''
});

function submitCheckout() {
  if (!cartStore.items.length) {
    alert('Cart empty!');
    return;
  }
  // Backend API call here with cartStore.items and checkoutForm.value
  alert('Checkout completed successfully!');
  cartStore.clearCart();
  router.push('/');
}
</script>

<template>
  <div class="my-6 bg-gray-50 p-4 rounded shadow-md">
    <h3 class="text-lg font-bold mb-2">Checkout</h3>
    <form @submit.prevent="submitCheckout" class="space-y-3">
      <input v-model="checkoutForm.name" type="text" placeholder="Full Name" class="w-full px-4 py-2 border" required />
      <input v-model="checkoutForm.email" type="email" placeholder="Email Address" class="w-full px-4 py-2 border" required />
      <input v-model="checkoutForm.address" type="text" placeholder="Shipping Address" class="w-full px-4 py-2 border" required />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Complete Checkout</button>
    </form>
    <div v-if="cartStore.items.length" class="mt-6">
      <h4 class="font-semibold">Order Summary:</h4>
      <ul class="mb-2">
        <li v-for="item in cartStore.items" :key="item.id">
          {{ item.name }} x{{ item.quantity }} = Rs. {{ item.price * item.quantity }}
        </li>
      </ul>
      <div class="font-bold">Total: Rs. {{ cartStore.total }}</div>
    </div>
  </div>
</template>
