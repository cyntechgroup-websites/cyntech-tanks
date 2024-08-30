<template>
  <header class="bg-[#F8F9FA] shadow-md z-50 relative">
    <div
      class="hidden lg:flex justify-end items-center bg-[#1b3664] text-[#F8F9FA] px-12 text-sm"
    >
      <div class="flex items-center space-x-6">
        <NuxtLink to="/" class="group hover:bg-gray-300/30 py-4 px-4">
          <div class="flex items-center">
            <Icon
              icon="lucide:globe"
              class="h-3 w-3 mr-2 text-gray-400 group-hover:text-[#FFC107]"
            />
            <span>Office Locations</span>
          </div></NuxtLink
        >
        <div class="flex items-center space-x-2">
          <Icon
            icon="lucide:phone"
            class="h-3 w-3 text-[#FFC107] scale-x-[-1]"
          />
          <span class="text-[#FFC107]"> (403) 570-5860</span>
        </div>
      </div>
    </div>

    <section class="flex items-center justify-between py-4 px-4 lg:px-8">
      <div class="flex items-center w-full lg:space-x-8">
        <article class="flex-shrink-0">
          <NuxtLink to="/">
            <img
              :src="logoSrc"
              alt="Cyntech Tanks"
              class="min-w-[128px] lg:min-w-[224px] lg:py-4 lg:pr-0 cursor-pointer"
            />
          </NuxtLink>
        </article>

        <nav class="hidden lg:flex space-x-8">
          <div
            @mouseenter="toggleSubMenu('about')"
            @mouseleave="toggleSubMenu('')"
            class="relative"
          >
            <NuxtLink to="/about-us" class="flex items-center">
              <button class="text-[#1b3664] flex items-center">
                About us
                <Icon icon="lucide:chevron-down" class="ml-1 mt-0.5 h-5 w-5" />
              </button>
            </NuxtLink>
            <div
              v-if="subMenu === 'about'"
              class="absolute w-full h-6 bg-transparent"
              style="top: 100%"
            ></div>
            <ul
              v-if="subMenu === 'about'"
              class="absolute -translate-x-[33%] translate-y-3 bg-white shadow-lg w-64 text-sm border-t-4 border-[#1b3664]"
            >
              <div class="absolute inset-x-0 -top-[10px] flex justify-center">
                <div
                  class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#1b3664]"
                ></div>
              </div>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">Our History</li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Our Leadership
              </li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Our Commitment to Health and Safety
              </li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Our Dedication to Quality
              </li>
            </ul>
          </div>
          <div
            @mouseenter="toggleSubMenu('services')"
            @mouseleave="toggleSubMenu('')"
            class="relative"
          >
            <button class="text-[#1b3664] flex items-center">
              Our Services
              <Icon icon="lucide:chevron-down" class="ml-1 mt-0.5 h-5 w-5" />
            </button>
            <div
              v-if="subMenu === 'services'"
              class="absolute w-full h-6 bg-transparent"
              style="top: 100%"
            ></div>
            <ul
              v-if="subMenu === 'services'"
              class="absolute -translate-x-[28%] translate-y-3 bg-white shadow-lg w-64 text-sm border-t-4 border-[#1b3664]"
            >
              <div class="absolute inset-x-0 -top-[10px] flex justify-center">
                <div
                  class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#1b3664]"
                ></div>
              </div>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Tank Foundations
              </li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Construction, Repair and Maintenance
              </li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Lifting, Levelling and Relocation
              </li>
              <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                Tank Cleaning
              </li>
            </ul>
          </div>
          <div><button class="text-[#1b3664]">Projects</button></div>
          <div><button class="text-[#1b3664]">Gallery</button></div>
          <div><button class="text-[#1b3664]">Careers</button></div>
        </nav>
      </div>

      <section class="flex items-center space-x-4">
        <div class="relative flex items-center">
          <button
            @click="toggleSearch"
            class="flex items-center justify-center"
          >
            <Icon
              icon="lucide:search"
              class="h-10 w-10 text-[#1b3664] bg-gray-200 p-2"
            />
          </button>
          <div
            v-if="searchOpen"
            class="absolute top-14 lg:top-16 right-0 bg-[#F8F9FA] p-2 flex flex-col space-y-2 min-w-52 md:min-w-72"
          >
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Type to search..."
              class="border border-gray-400 p-1 rounded w-48 md:w-72"
            />
            <button
              @click="executeSearch"
              class="bg-[#1b3664] text-white p-1 rounded md:hover:bg-[#FFC107] md:hover:text-[#1b3664]"
            >
              Search
            </button>
          </div>
        </div>

        <button
          class="hidden lg:flex items-center bg-[#FFC107] text-[#1b3664] text-sm pr-4 w-32 h-10"
        >
          <div
            class="mr-2.5 w-0 h-0 border-y-[20px] border-y-transparent border-l-[20px] border-l-[#034]"
          ></div>
          <span>Contact Us</span>
        </button>

        <div class="relative flex items-center lg:hidden">
          <button
            @click="togglePhone"
            class="flex items-center justify-center scale-x-[-1]"
          >
            <Icon
              icon="lucide:phone"
              class="h-10 w-10 bg-[#FFC107] text-[#1b3664] p-2"
            />
          </button>
          <div
            v-if="phoneOpen"
            class="absolute top-14 right-0 bg-[#F8F9FA] p-2 min-w-52"
          >
            <p
              v-if="!copied"
              class="text-base text-[#1b3664] flex justify-center bg-[#FFC107] p-2"
            >
              (403) 570-5860
            </p>
            <p
              v-if="copied"
              class="text-base text-[#1b3664]flex text-center justify-center bg-[#1b3664] text-[#FFC107] p-2"
            >
              Phone Copied!
            </p>
            <button
              @click="copyPhoneNumber"
              class="mt-2 text-sm bg-[#1b3664] text-white px-4 py-2 md:hover:bg-[#FFC107] md:hover:text-[#1b3664] flex text-center justify-center"
            >
              Copy
            </button>
          </div>
        </div>

        <button
          @click="toggleMenu"
          class="lg:hidden flex items-center justify-center"
        >
          <Icon
            :icon="menuOpen ? 'lucide:x' : 'lucide:menu'"
            class="h-7 w-7 text-[#1b3664]"
          />
        </button>
      </section>
    </section>
  </header>

  <transition name="slide-down">
    <nav
      v-if="menuOpen"
      class="absolute top-[4.5rem] w-full bg-white shadow-md z-40 lg:hidden"
    >
      <ul v-if="subMenu === ''" class="flex flex-col border-t border-gray-400">
        <li class="border-b border-gray-400">
          <button
            @click="toggleSubMenu('about')"
            class="flex justify-between items-center w-full"
          >
            <span class="pl-4 py-4 text-[#1b3664]">About Us</span>
            <Icon
              icon="lucide:chevron-right"
              class="text-[#1b3664] bg-slate-300 w-14 h-14 p-4"
            />
          </button>
        </li>
        <li class="border-b border-gray-400">
          <button
            @click="toggleSubMenu('services')"
            class="flex justify-between items-center w-full"
          >
            <span class="pl-4 py-4 text-[#1b3664]">Our Services</span>
            <Icon
              icon="lucide:chevron-right"
              class="text-[#1b3664] bg-slate-300 w-14 h-14 p-4"
            />
          </button>
        </li>
        <li class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Projects</span>
        </li>
        <li class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Gallery</span>
        </li>
        <li class="p-4"><span class="text-[#1b3664]">Careers</span></li>
        <li class="p-4 bg-[#FFC107] relative">
          <span class="text-[#1b3664] flex items-center justify-center"
            >Contact Us</span
          >
          <div
            class="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[25px] border-y-transparent border-l-[25px] border-l-[#034]"
          ></div>
        </li>
        <li class="p-4 bg-[#034]">
          <span class="text-[#F8F9FA] flex items-center"
            ><Icon icon="lucide:globe" class="h-4 w-4 mr-2 text-gray-400" />
            Office Locations</span
          >
        </li>
      </ul>
      <ul v-else class="flex flex-col">
        <li class="bg-gray-100 border-b border-gray-400">
          <button @click="goBack" class="flex items-center">
            <Icon
              icon="lucide:arrow-left"
              class="text-[#1b3664] bg-slate-300 w-14 h-14 p-4"
            />
            <span class="pl-4 text-[#1b3664] text-start text-sm">
              You are in: <br />
              <span class="font-semibold text-base">{{
                subMenu === "about"
                  ? "About us"
                  : subMenu === "services"
                  ? "Our Services"
                  : ""
              }}</span>
            </span>
          </button>
        </li>
        <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Our History</span>
        </li>
        <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Our Leadership</span>
        </li>
        <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]"
            >Our Commitment to Health and Safety</span
          >
        </li>
        <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Our Dedication to Quality</span>
        </li>
        <li v-if="subMenu === 'services'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Tank Foundations</span>
        </li>
        <li v-if="subMenu === 'services'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]"
            >Construction, Repair and Maintenance</span
          >
        </li>
        <li v-if="subMenu === 'services'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Lifting, Levelling and Relocation</span>
        </li>
        <li v-if="subMenu === 'services'" class="border-b border-gray-400 p-4">
          <span class="text-[#1b3664]">Tank Cleaning</span>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const searchOpen = ref(false);
const phoneOpen = ref(false);
const menuOpen = ref(false);
const subMenu = ref("");
const searchQuery = ref("");
const logoSrc = ref("/images/cyntech-tanks-logo-short.svg");
const copied = ref(false);

function updateLogo() {
  logoSrc.value =
    window.innerWidth >= 1024
      ? "/images/cyntech-tanks-logo.svg"
      : "/images/cyntech-tanks-logo-short.svg";

  const logoElement = document.querySelector("img");
  if (logoElement) {
    logoElement.style.display = "none";
    logoElement.offsetHeight;
    logoElement.style.display = "";
  }
}

onMounted(() => {
  updateLogo();
  window.addEventListener("resize", updateLogo);
});

function toggleSearch() {
  searchOpen.value = !searchOpen.value;
  if (phoneOpen.value) phoneOpen.value = false;
}

function togglePhone() {
  phoneOpen.value = !phoneOpen.value;
  if (searchOpen.value) searchOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  subMenu.value = "";
}

function toggleSubMenu(menu) {
  subMenu.value = menu;
}

function goBack() {
  subMenu.value = "";
}

function executeSearch() {
  console.log(`Searching for: ${searchQuery.value}`);
  searchQuery.value = "";
  searchOpen.value = false;
}

function copyPhoneNumber() {
  const phoneNumber = "(403) 570-5860";
  navigator.clipboard.writeText(phoneNumber).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1000);
  });
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
