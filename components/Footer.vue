<template>
  <footer class="bg-gray-200 text-center py-6">
    <div class="max-w-lg mx-auto">
      <img
        src="/public/images/cyntech-tanks-logo.svg"
        alt="Cyntech Tanks Logo"
        class="w-60 mb-4 mt-2 mx-auto"
      />
      <p class="text-gray-600 text-base font-medium mb-4">
        © 2024 Copyright Cyntech Group
      </p>
      <p class="text-gray-600 text-sm">
        31 Technology Way SE <br />
        Calgary, AB T3S 0B8
      </p>
      <div class="flex justify-center space-x-6 mt-4">
        <a
          href="#"
          class="mt-2 text-sm bg-[#1b3664] text-white px-4 py-2 md:hover:bg-[#FFC107] md:hover:text-[#1b3664] flex text-center justify-center"
          >Terms of use</a
        >
      </div>
      <div class="flex justify-center space-x-6 mt-6">
        <a
          href="#"
          class="text-[#1b3664] md:hover:text-[#FFC107] md:hover:scale-105 md:hover:border-2 rounded border-[#FFC107] transition-all duration-150 ease-in-out md:p-1"
        >
          <Icon icon="lucide:linkedin" class="w-8 h-8" />
        </a>
        <a
          href="#"
          class="text-[#1b3664] md:hover:text-[#FFC107] md:hover:scale-105 md:hover:border-2 rounded border-[#FFC107] transition-all duration-150 ease-in-out md:p-1"
        >
          <Icon icon="lucide:instagram" class="w-8 h-8" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
footer {
  border-top: 1px solid #e5e7eb;
}
</style>
