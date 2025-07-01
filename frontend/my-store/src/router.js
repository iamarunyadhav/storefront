// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import Checkout from './components/Checkout.vue';
import AddProduct from './components/AddProduct.vue';

const routes = [
  { path: '/', name: 'ProductList', component: ProductList },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/add-product', name: 'AddProduct', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
