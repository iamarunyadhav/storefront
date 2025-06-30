<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Add Product</h2>
      <!-- <p class="mt-2 text-lg/8 text-gray-600">Add Product</p> -->
    </div>
    <form action="#" @submit.prevent="save" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Name</label>
          <div class="mt-2.5">
            <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Description</label>
          <div class="mt-2.5">
            <input type="text" name="description" id="description" autocomplete="description" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm/6 font-semibold text-gray-900">Stock</label>
          <div class="mt-2.5">
            <input type="number" name="stock" id="stock" autocomplete="stock" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm/6 font-semibold text-gray-900">Price</label>
          <div class="mt-2.5">
            <input type="number" name="price" id="price" autocomplete="price" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900">Image Link</label>
          <div class="mt-2.5">
            <input type="text" name="image" id="image" autocomplete="image" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
          </div>
        </div>
        </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import {apiClient} from '../api/axios' // Adjust the import path as necessary

const agreed = ref(false)

const save = () => {
  // Save the product
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const stock = document.getElementById('stock').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const product = {
        name: name,
        description: description,
        stock: stock,
        price: price,
        image: image
    };

    // You can use axios or fetch to send the product to your backend
    console.log('Product saved:', product);
    // For example, using axios:
    apiClient.post('/products', product)
      .then(response => {   
        console.log('Product added successfully:', response.data);
        // Optionally, you can reset the form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('stock').value = '';
        document.getElementById('price').value = '';
        document.getElementById('image').value = '';
      }) 

}

</script>