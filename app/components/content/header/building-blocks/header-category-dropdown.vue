<template>
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
</template>
