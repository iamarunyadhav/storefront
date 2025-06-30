<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-4s grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img :src="product.image" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <!-- <a :href="product."> -->
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                  <p class="text-sm font-medium text-gray-900">{{ product.stock }}</p>
                <!-- </a> -->
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
          <button
            class="mt-2 text-sm text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
                    @click="addToCart(product)"
                    >
                Add to Cart
            </button>
        </div>
      </div>
    </div>

    <ShoppingCart
    :open="cartOpen"
    :cart-items="cartItems"
    @close="cartOpen = false"
    />
    <!-- <ProductList/> -->
  </div>
  
</template>

<script>
// import axios from 'axios';
import { apiClient } from '../api/axios'; // Adjust the import path as necessary
import { ref, onMounted } from 'vue';
import ProductList from './ProductList.vue';

import ShoppingCart from './ShoppingCart.vue';

export default {
  components: { ShoppingCart },
  setup() {
    const products = ref([]);
    const cartItems = ref([]);
    const cartOpen = ref(false);

    const fetchProducts = async () => {
      const response = await apiClient.get('/products');
      products.value = response.data;
    };

    const addToCart = (product) => {
        console.log('Adding to cart:', product);
    const exists = cartItems.value.find(p => p.id === product.id);
    if (!exists) {
        cartItems.value.push(product);
    }
    cartOpen.value = true;
    };

    onMounted(fetchProducts);

    return {
      products,
      cartItems,
      cartOpen,
      addToCart
    };
  }
}

</script>

<style scoped>

</style>