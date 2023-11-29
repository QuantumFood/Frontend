<template>
    <div class="relative">
      <button @click="showMenu = !showMenu" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div v-if="showMenu" class="fixed inset-0 bg-gray-900 opacity-75 z-10"></div>
      <div v-if="showMenu" class="fixed inset-0 flex items-center justify-center z-20">
        <ul class="space-y-8 text-center text-white text-2xl">
          <li><a href="#" @click="handleLogout">Logout</a></li>
          <!-- Add more menu items here -->
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  // Your script
  </script>
  