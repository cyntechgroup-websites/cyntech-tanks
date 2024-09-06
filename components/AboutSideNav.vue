<template>
  <article class="px-4 lg:pr-0 lg:pl-8 lg:hidden">
    <div class="relative border border-gray-400 min-w-[220px] max-w-[500px] mx-auto lg:mt-14 z-30">
      <button
        @click="toggleDropdown"
        class="flex items-center justify-between w-full p-2 py-3 text-[#1b3664] bg-white border border-[#1b3664]"
      >
        <span class="text-[#1b3664] font-semibold text-lg">More In This Section</span>
        <Icon :icon="dropdownOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="text-[#1b3664]" />
      </button>

      <div v-if="dropdownOpen" class="absolute w-full bg-white shadow-lg mt-2 border border-gray-400 z-10">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
          :class="{ 'bg-gray-100 font-semibold pl-6': isActive(link.path) }"
        >
          <span v-if="isActive(link.path)" class="absolute left-1 top-1/2 transform -translate-y-1/2">
            <svg class="w-4 h-4 fill-[#FFC107]" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 10,5 0,10" />
            </svg>
          </span>
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </article>

  <article class="px-4 lg:pr-0 lg:pl-8 hidden lg:block">
    <div class="relative min-w-[230px] max-w-[500px] mx-auto lg:mt-14 z-30">
      <div class="absolute w-full bg-white mt-2 z-10">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
          :class="{ 'bg-gray-100 font-semibold pl-6': isActive(link.path) }"
        >
          <span v-if="isActive(link.path)" class="absolute left-1 top-1/2 transform -translate-y-1/2">
            <svg class="w-4 h-4 fill-[#FFC107]" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 10,5 0,10" />
            </svg>
          </span>
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </article>

</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const dropdownOpen = ref(false);
const route = useRoute();

const links = [
  { path: '/about-us', label: 'About Us' },
  { path: '/history', label: 'Our History' },
  { path: '/leadership', label: 'Our Leadership' },
  { path: '/health-safety', label: 'Our Commitment to Health and Safety' },
  { path: '/quality', label: 'Our Dedication to Quality' }
];

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function isActive(path) {
  return route.path === path || route.fullPath === path;
}
</script>