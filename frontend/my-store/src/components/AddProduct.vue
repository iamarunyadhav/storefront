<template>
  <div class="my-6 bg-gray-50 p-4 rounded shadow-md">
    <h3 class="text-lg font-bold mb-2">{{ form.id ? 'Edit Product' : 'Add Product' }}</h3>
    <form @submit.prevent="submitProduct" class="space-y-3">
      <input v-model="form.name" type="text" placeholder="Product Name" class="w-full px-4 py-2 border" />
      <textarea v-model="form.description" placeholder="Description" class="w-full px-4 py-2 border" />
      <input v-model.number="form.price" type="number" placeholder="Price" class="w-full px-4 py-2 border" />
      <input v-model.number="form.stock" type="number" placeholder="Stock" class="w-full px-4 py-2 border" />
      <input v-model="form.image" type="text" placeholder="Image URL" class="w-full px-4 py-2 border" />
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">{{ form.id ? 'Update' : 'Add' }}</button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { apiClient } from '../api/axios';

export default {
  props: ['editingProduct'],
  emits: ['refresh'],
  setup(props, { emit }) {
    const form = ref({
      name: '',
      description: '',
      price: 0,
      stock: 0,
      image: '',
    });

    watch(() => props.editingProduct, (newVal) => {
      if (newVal) {
        form.value = { ...newVal };
      }
    });

    const submitProduct = async () => {
      if (form.value.id) {
        await apiClient.patch(`/products/${form.value.id}`, form.value);
      } else {
        await apiClient.post('/products', form.value);
      }
      emit('refresh');
      form.value = { name: '', description: '', price: 0, stock: 0, image: '' };
    };

    return { form, submitProduct };
  }
};
</script>
