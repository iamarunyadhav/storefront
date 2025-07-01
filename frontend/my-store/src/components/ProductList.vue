<script setup>
import { onMounted, ref } from 'vue';
import { apiClient } from '../api/axios';
import { useCartStore } from '../stores/cart';
import AddProduct from './AddProduct.vue';

const products = ref([]);
const editingProduct = ref(null);
const cartStore = useCartStore();

const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  products.value = response.data;
};

const addToCart = (product) => {
  cartStore.addToCart(product);
};

const editProduct = (product) => {
  editingProduct.value = { ...product };
};

const deleteProduct = async (id) => {
  await apiClient.delete(`/products/${id}`);
  fetchProducts();
};

onMounted(fetchProducts);
</script>

<template>
  <div class="bg-white text-black min-h-screen p-6">
    <h2 class="text-2xl font-bold mb-4">Product Catalog</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="border p-4 rounded shadow-md">
        <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded mb-2" />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="font-bold text-indigo-600">Rs. {{ product.price }}</p>
        <p class="text-sm text-gray-500">Stock: {{ product.stock }}</p>
        <div class="flex space-x-2 mt-3">
          <button @click="addToCart(product)" class="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add to Cart</button>
          <button @click="editProduct(product)" class="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
          <button @click="deleteProduct(product.id)" class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    </div>
    <AddProduct :editingProduct="editingProduct" @refresh="fetchProducts" />
  </div>
</template>
