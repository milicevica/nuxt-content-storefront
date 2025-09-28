<script lang="ts" setup>
import Header from "../content/header/header.vue";
</script>

<template>
  <Header />
  <!-- <header class="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
    <div class="flex items-center justify-between px-6 py-3">
      <div class="flex items-center justify-center space-x-2">
        <img
          src="/logo.png"
          alt="Storefront Logo"
          class="h-8 w-32"
        >
      </div>

      <div class="flex-1 mx-6 max-w-[750px]">
        <div class="relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-full border rounded-full pl-4 pr-10 py-2 focus:outline-non focust:ring-2 focus:ring-blue-500"
          >

          <button class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
            🔍
          </button>
        </div>
      </div>

      <div>
        <a href="#" class="text-sm font-medium text-gray-600 hover:text-blue-600">Log In</a>
      </div>
    </div>

    <div class="flex items-center justify-between px-6 py-2 bg-gray-50">
      <div class="relative inline-block group">
  <button
    class="flex items-center space-x-1 px-3 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
  >
    <span>Categories</span>
    <svg
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  <div
    class="absolute left-0 mt-1 w-48 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200"
  >
    <a href="/category/1" class="block px-4 py-2 text-sm hover:bg-gray-100">Electronics</a>
    <a href="/category/2" class="block px-4 py-2 text-sm hover:bg-gray-100">Clothing</a>
    <a href="/category/3" class="block px-4 py-2 text-sm hover:bg-gray-100">Home</a>
  </div>
  </div>

  <div />

  <div class="flex items-center space-x-6 text-sm font-medium">
    <a href="/account" class="text-gray-600 hover:text-blue-600">Account</a>
    <a href="/cart" class="text-gray-600 hover:text-blue-600">Cart (0)</a>
  </div>
  </div>
  </header> -->
</template>
