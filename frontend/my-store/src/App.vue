<script setup>
import ProductList from './components/ProductList.vue';
// import AddProduct from './components/AddProduct.vue';
// import ShoppingCart from './components/ShoppingCart.vue';
</script>

<template>
  <div>
    <nav class="p-4 flex space-x-4 bg-gray-100">
      <router-link to="/" class="text-blue-700">Home</router-link>
      <router-link to="/cart" class="text-blue-700">Cart</router-link>
      <router-link to="/checkout" class="text-blue-700">Checkout</router-link>
      <router-link to="/add-product" class="text-blue-700">Add Product</router-link>
    </nav>
    <router-view />
    <!-- You can add <ShoppingCart/> anywhere for persistent mini-cart -->
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
