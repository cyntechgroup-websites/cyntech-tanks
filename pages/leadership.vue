<template>
  <div>
    <LeadershipHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-12 px-6"></div>
    <section class="flex flex-col mt-10 lg:mt-0 lg:flex-row justify-center">
      <article class="px-4 lg:pr-0 lg:pl-8">
        <div
          class="relative border border-gray-400 min-w-[220px] max-w-[500px] mx-auto lg:mt-14 z-50"
        >
          <button
            @click="toggleDropdown"
            class="flex items-center justify-between w-full p-2 py-3 text-[#1b3664] bg-white border border-[#1b3664]"
          >
            <span class="text-[#1b3664] font-semibold text-lg"
              >More In This Section</span
            >
            <Icon
              :icon="dropdownOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'"
              class="text-[#1b3664]"
            />
          </button>

          <div
            v-if="dropdownOpen"
            class="absolute w-full bg-white shadow-lg mt-2 border border-gray-400 z-10"
          >
            <NuxtLink
              to="/about-us"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/about-us'),
              }"
            >
              <span
                v-if="isActive('/about-us')"
                class="absolute left-1 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  class="w-4 h-4 fill-[#FFC107]"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 10,5 0,10" />
                </svg>
              </span>
              About Us
            </NuxtLink>

            <NuxtLink
              to="/about-us#history"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/about-us#history'),
              }"
            >
              <span
                v-if="isActive('/about-us#history')"
                class="absolute left-1 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  class="w-4 h-4 fill-[#FFC107]"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 10,5 0,10" />
                </svg>
              </span>
              Our History
            </NuxtLink>

            <NuxtLink
              to="/leadership"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/leadership'),
              }"
            >
              <span
                v-if="isActive('/leadership')"
                class="absolute left-1 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  class="w-4 h-4 fill-[#FFC107]"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 10,5 0,10" />
                </svg>
              </span>
              Our Leadership
            </NuxtLink>

            <NuxtLink
              to="/about-us#health-safety"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive(
                  '/about-us#health-safety'
                ),
              }"
            >
              <span
                v-if="isActive('/about-us#health-safety')"
                class="absolute left-1 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  class="w-4 h-4 fill-[#FFC107]"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 10,5 0,10" />
                </svg>
              </span>
              Our Commitment to Health and Safety
            </NuxtLink>

            <NuxtLink
              to="/about-us#quality"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/about-us#quality'),
              }"
            >
              <span
                v-if="isActive('/about-us#quality')"
                class="absolute left-1 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  class="w-4 h-4 fill-[#FFC107]"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 10,5 0,10" />
                </svg>
              </span>
              Our Dedication to Quality
            </NuxtLink>
          </div>
        </div>
      </article>
      <article>
        <LeadershipGrid />
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const dropdownOpen = ref(false);
const route = useRoute();

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function isActive(path) {
  return route.path === path || route.fullPath === path;
}
</script>
