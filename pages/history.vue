<template>
  <div>
    <HistoryHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-12 px-6"></div>
    <section class="flex flex-col mt-10 lg:mt-0 lg:flex-row justify-center max-w-7xl mx-auto">
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
              to="/history"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/history'),
              }"
            >
              <span
                v-if="isActive('/history')"
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
              to="/health-safety"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/health-safety'),
              }"
            >
              <span
                v-if="isActive('/health-safety')"
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
              to="/quality"
              class="block p-2 pl-7 text-[#1b3664] hover:bg-gray-100 border-t relative"
              :class="{
                'bg-gray-100 font-semibold pl-6': isActive('/quality'),
              }"
            >
              <span
                v-if="isActive('/quality')"
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
        <section class="flex flex-col py-12 pb-4 px-10 md:px-10 justify-center">
          <h2 class="text-2xl text-gray-700 font-light leading-relaxed">
            With hard work and an entrepreneurial mindset, we have grown to
            become a global leader for helical pile foundations, helical rigid
            inclusions, and pipeline anchors. With a wealth of experience and
            the drive to go above and beyond, we continue to develop through
            innovation and by continuing to provide quality service to clients
            across the globe.
          </h2>
        </section>
        <section class="max-w-6xl mx-auto px-10 py-10">
          <!-- 1981 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 1981"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">1981</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                Cyntech started in 1981 as a small, client-focused company
                within the Alberta energy sector.
              </p>
            </div>
          </div>

          <!-- 1997 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 1997"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">1997</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                Cyntech establishes three divisions - helical piles, pipeline
                anchors, and tank services.
              </p>
            </div>
          </div>

          <!-- 2007 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 2007"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">2007</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                Cyntech builds a fabrication facility and head office in
                Calgary, Alberta.
              </p>
            </div>
          </div>

          <!-- 2010 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 2010"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">2010</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                Recognized in 2010 by Alberta Venture Magazine as one of
                Alberta's top 25 fastest growing companies over $20 million,
                Cyntech has since grown to become a relevant player in both the
                North American and global markets.
              </p>
            </div>
          </div>

          <!-- 2013 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 2013"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">2013</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                In July 2013, Keller Group plc acquired Cyntech Corporation as
                part of the acquisition of North American Caisson Ltd. (a
                division of North American Construction Group - NACG). Through
                this partnership, Cyntech joined the largest ground engineering
                specialist in the world and gained access to leading technology,
                resources, knowledge and efficiencies for the benefit of both
                the company and its clients.
              </p>
            </div>
          </div>

          <!-- 2021 -->
          <div class="flex flex-col md:flex-row mb-8">
            <img
              src="https://picsum.photos/200/150"
              alt="Image for 2021"
              class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 object-cover"
            />
            <div class="md:w-2/3">
              <div class="flex items-center">
                <h3 class="text-[#1b3664] font-bold text-3xl mb-2">2021</h3>
                <div class="ml-4 flex-grow h-0.5 bg-[#fdc70c]"></div>
              </div>
              <p class="text-[#1b3664]">
                Cyntech's helical pile and pipeline anchoring division completes
                Management Buyout from Keller and becomes Cyntech Group.
              </p>
            </div>
          </div>
        </section>
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
