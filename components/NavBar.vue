<template>
  <div>
    <header class="bg-white shadow-md relative z-30">
      <!-- Office Locations Bar for large screens -->
      <div
        class="hidden lg:flex justify-end items-center bg-[#1b3664] text-[#F8F9FA] px-8 text-sm z-50"
      >
        <!-- Links to office locations and contact info -->
        <div class="flex items-center gap-4">
          <NuxtLink
            to="https://landing-page-development-cyntech.vercel.app/"
            class="group hover:bg-gray-300/30 py-4 px-2"
          >
            <div class="flex items-center">
              <Icon
                icon="lucide:arrow-left"
                class="h-5 w-5 mr-2 text-gray-400 group-hover:text-[#FFC107]"
              />
              <span>Back To Landing Page</span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/office-locations"
            class="group hover:bg-gray-300/30 py-4 px-2"
          >
            <div class="flex items-center">
              <Icon
                icon="lucide:globe"
                class="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#FFC107]"
              />
              <span>Office Locations</span>
            </div>
          </NuxtLink>
          <button class="flex items-center space-x-2 hover:bg-gray-300/30 py-4 px-2 min-w-36" @click="copyPhoneNumber">
            <Icon
              icon="lucide:phone"
              class="h-4 w-4 text-[#FFC107] scale-x-[-1]"
            />
            <span v-if="!copied" class="text-[#FFC107]">(403) 228-1767</span>
            <span v-if="copied" class="text-[#FFC107]">Phone Copied!</span>
          </button>
        </div>
      </div>

      <!-- Main Navbar Section -->
      <section
        class="flex items-center justify-between py-4 px-4 lg:px-8 z-30 bg-white"
      >
        <div class="flex items-center w-full lg:space-x-8">
          <!-- Logo with NuxtLink to the homepage -->
          <article class="flex-shrink-0">
            <NuxtLink to="/" @click="closeMenu">
              <img
                :src="logoSrc"
                alt="Cyntech Tanks"
                class="min-w-[128px] lg:min-w-[224px] lg:py-4 lg:pr-0 cursor-pointer"
              />
            </NuxtLink>
          </article>

          <!-- Inline Menu for large screens -->
          <nav class="hidden lg:flex space-x-8 z-40">
            <!-- About Us section with dropdown submenu -->
            <div
              @mouseenter="toggleSubMenu('about')"
              @mouseleave="toggleSubMenu('')"
              class="relative"
            >
              <NuxtLink
                to="/about-us"
                class="flex items-center"
                @click="closeSubMenu"
              >
                <button class="text-[#1b3664] flex items-center">
                  About Us
                  <Icon
                    icon="lucide:chevron-down"
                    class="ml-1 mt-0.5 h-5 w-5"
                  />
                </button>
              </NuxtLink>
              <div
                v-if="subMenu === 'about'"
                class="absolute w-full h-6 bg-transparent"
                style="top: 100%"
              ></div>
              <!-- Submenu -->
              <ul
                v-if="subMenu === 'about'"
                class="absolute -translate-x-[33%] translate-y-3 bg-white shadow-lg w-64 text-sm border-t-4 border-[#1b3664]"
              >
                <!-- Triangle to indicate dropdown -->
                <div class="absolute inset-x-0 -top-[10px] flex justify-center">
                  <div
                    class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#1b3664]"
                  ></div>
                </div>
                <!-- Submenu Links -->
                <NuxtLink to="/history" @click="closeSubMenu">
                  <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Our History
                  </li>
                </NuxtLink>
                <NuxtLink to="/leadership" @click="closeSubMenu">
                  <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Our Leadership
                  </li>
                </NuxtLink>
                <NuxtLink to="/health-safety" @click="closeSubMenu">
                  <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Our Commitment to Health and Safety
                  </li></NuxtLink
                >
                <NuxtLink to="/quality" @click="closeSubMenu">
                  <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Our Dedication to Quality
                  </li></NuxtLink
                >
              </ul>
            </div>

            <!-- Our Services section with dropdown submenu -->
            <div
              @mouseenter="toggleSubMenu('services')"
              @mouseleave="toggleSubMenu('')"
              class="relative"
            >
              <NuxtLink
                to="/our-services"
                class="flex items-center"
                @click="closeSubMenu"
              >
                <button class="text-[#1b3664] flex items-center">
                  Our Services
                  <Icon
                    icon="lucide:chevron-down"
                    class="ml-1 mt-0.5 h-5 w-5"
                  />
                </button>
              </NuxtLink>
              <div
                v-if="subMenu === 'services'"
                class="absolute w-full h-6 bg-transparent"
                style="top: 100%"
              ></div>
              <!-- Services submenu -->
              <ul
                v-if="subMenu === 'services'"
                class="absolute -translate-x-[28%] translate-y-3 bg-white shadow-lg w-64 text-sm border-t-4 border-[#1b3664]"
              >
                <div class="absolute inset-x-0 -top-[10px] flex justify-center">
                  <div
                    class="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#1b3664]"
                  ></div>
                </div>

                <!-- Links to services -->
                <NuxtLink to="/engineering-services" @click="closeSubMenu"
                  ><li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Engineering Services
                  </li></NuxtLink
                >
                <NuxtLink to="/construction-maintenance" @click="closeSubMenu"
                  ><li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Construction, Repair and Maintenance
                  </li></NuxtLink
                >
                <NuxtLink to="/tank-cleaning" @click="closeSubMenu"
                  ><li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Tank Cleaning
                  </li></NuxtLink
                >
                <NuxtLink to="/lifting-relocation" @click="closeSubMenu"
                  ><li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Lifting, Levelling and Relocation
                  </li></NuxtLink
                >
                <NuxtLink to="/tank-foundations" @click="closeSubMenu">
                  <li class="p-4 text-[#1b3664] hover:bg-gray-300">
                    Tank Foundations
                  </li></NuxtLink
                >
              </ul>
            </div>

            <!-- Direct links to pages -->
            <div>
              <NuxtLink to="/gallery" class="text-[#1b3664]">Gallery</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/careers" class="text-[#1b3664]">Careers</NuxtLink>
            </div>
          </nav>
        </div>

        <!-- Search and Contact Section -->
        <section class="flex items-center space-x-4">
          <!-- Search icon -->
          <!-- <div class="relative flex items-center">
            <button
              @click="toggleSearch"
              class="flex items-center justify-center"
            >
              <Icon
                icon="lucide:search"
                class="h-10 w-10 text-[#1b3664] bg-gray-200 p-2"
              />
            </button> -->
          <!-- Search input -->
          <!-- <div
              v-if="searchOpen"
              class="absolute top-14 lg:top-16 right-0 bg-white p-2 flex flex-col space-y-2 min-w-52 md:min-w-72 z-50"
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
          </div> -->

          <!-- Contact Us button for larger screens -->
          <NuxtLink to="/contact-us" class="hidden lg:flex items-center">
            <button
              class="hidden lg:flex items-center bg-[#FFC107] text-[#1b3664] text-sm pr-4 w-32 h-10"
            >
              <div
                class="mr-2.5 w-0 h-0 border-y-[20px] border-y-transparent border-l-[20px] border-l-[#034]"
              ></div>
              <span>Contact Us</span>
            </button>
          </NuxtLink>

          <!-- Phone Icon for smaller screens -->
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
            <!-- Dropdown phone number with copy functionality -->
            <div
              v-if="phoneOpen"
              class="absolute top-14 right-0 bg-white p-2 min-w-52 border-b border-l border-r border-gray-400"
            >
              <p
                v-if="!copied"
                class="text-base text-[#1b3664] flex justify-center bg-[#FFC107] p-2"
              >
              (403) 228-1767
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

          <!-- Hamburger menu icon for small screens -->
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

    <!-- Sliding Menu for small screens -->
    <transition name="slide-down">
      <nav
        v-if="menuOpen"
        class="absolute top-[4.5rem] w-full bg-white shadow-md z-20 lg:hidden"
      >
        <ul
          v-if="subMenu === ''"
          class="flex flex-col border-t border-gray-400"
        >
          <!-- Dropdown links for About Us and Our Services -->
          <li class="border-b border-gray-400">
            <div class="flex justify-between items-center w-full">
              <NuxtLink
                to="/about-us"
                class="pl-4 py-4 text-[#1b3664] flex-grow"
                @click="closeMenu"
              >
                <span>About Us</span>
              </NuxtLink>
              <button
                @click="toggleSubMenu('about')"
                class="text-[#1b3664] bg-slate-300 w-14 h-14 flex items-center justify-center text-center"
              >
                <Icon icon="lucide:chevron-right" class="w-14 h-14 p-[15px]" />
              </button>
            </div>
          </li>
          <li class="border-b border-gray-400">
            <div class="flex justify-between items-center w-full">
              <NuxtLink
                to="/our-services"
                class="pl-4 py-4 text-[#1b3664] flex-grow"
                @click="closeMenu"
              >
                Our Services
              </NuxtLink>
              <button
                @click="toggleSubMenu('services')"
                class="text-[#1b3664] bg-slate-300 w-14 h-14 flex items-center justify-center text-center"
              >
                <Icon icon="lucide:chevron-right" class="w-14 h-14 p-[15px]" />
              </button>
            </div>
          </li>
          <NuxtLink to="/gallery" class="text-[#1b3664]" @click="closeMenu">
            <li class="border-b border-gray-400 p-4">Gallery</li>
          </NuxtLink>
          <NuxtLink to="/careers" class="text-[#1b3664]" @click="closeMenu">
            <li class="p-4">Careers</li>
          </NuxtLink>
          <NuxtLink to="/contact-us">
            <li class="p-4 bg-[#FFC107] relative" @click="closeMenu">
              <div class="text-[#1b3664] flex items-center justify-center">
                Contact Us
              </div>
              <div
                class="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[25px] border-y-transparent border-l-[25px] border-l-[#034]"
              ></div>
            </li>
          </NuxtLink>
          <NuxtLink to="/office-locations" @click="closeMenu">
            <li class="p-4 bg-[#034]">
              <div class="text-[#F8F9FA] flex items-center">
                <Icon icon="lucide:globe" class="h-4 w-4 mr-2 text-gray-400" />
                Office Locations
              </div>
            </li>
          </NuxtLink>
          <NuxtLink
            to="https://landing-page-development-cyntech.vercel.app/"
            @click="closeMenu"
          >
            <li class="p-4 bg-white border-b border-gray-400">
              <div class="text-[#1b3664] flex items-center">
                <Icon
                  icon="lucide:arrow-left"
                  class="h-4 w-4 mr-2 text-gray-800"
                />
                Back To Landing Page
              </div>
            </li>
          </NuxtLink>
        </ul>

        <!-- Back button for submenus -->
        <ul v-else class="flex flex-col">
          <li class="bg-gray-100 border-b border-gray-400">
            <div class="flex items-center">
              <button @click="goBack" class="flex items-center">
                <Icon
                  icon="lucide:arrow-left"
                  class="text-[#1b3664] bg-slate-300 w-14 h-14 p-4"
                />
              </button>
              <span class="pl-4 text-[#1b3664] text-start text-sm">
                You are in: <br />
                <span class="font-semibold text-base">{{
                  subMenu === "about"
                    ? "About Us"
                    : subMenu === "services"
                    ? "Our Services"
                    : ""
                }}</span>
              </span>
            </div>
          </li>
          <!-- Submenu items for About Us and Our Services -->
          <NuxtLink to="/history" class="text-[#1b3664]" @click="closeMenu">
            <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
              Our History
            </li>
          </NuxtLink>
          <NuxtLink to="/leadership" class="text-[#1b3664]" @click="closeMenu">
            <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
              Our Leadership
            </li>
          </NuxtLink>
          <NuxtLink
            to="/health-safety"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
              Our Commitment to Health and Safety
            </li>
          </NuxtLink>
          <NuxtLink to="/quality" class="text-[#1b3664]" @click="closeMenu">
            <li v-if="subMenu === 'about'" class="border-b border-gray-400 p-4">
              Our Dedication to Quality
            </li>
          </NuxtLink>
          <NuxtLink
            to="/engineering-services"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li
              v-if="subMenu === 'services'"
              class="border-b border-gray-400 p-4"
            >
              Engineering Services
            </li>
          </NuxtLink>
          <NuxtLink
            to="/construction-maintenance"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li
              v-if="subMenu === 'services'"
              class="border-b border-gray-400 p-4"
            >
              Construction, Repair and Maintenance
            </li>
          </NuxtLink>
          <NuxtLink
            to="/tank-cleaning"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li
              v-if="subMenu === 'services'"
              class="border-b border-gray-400 p-4"
            >
              Tank Cleaning
            </li>
          </NuxtLink>
          <NuxtLink
            to="/lifting-relocation"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li
              v-if="subMenu === 'services'"
              class="border-b border-gray-400 p-4"
            >
              Lifting, Levelling and Relocation
            </li>
          </NuxtLink>
          <NuxtLink
            to="/tank-foundations"
            class="text-[#1b3664]"
            @click="closeMenu"
          >
            <li
              v-if="subMenu === 'services'"
              class="border-b border-gray-400 p-4"
            >
              Tank Foundations
            </li>
          </NuxtLink>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const searchOpen = ref(false);
const phoneOpen = ref(false);
const menuOpen = ref(false);
const subMenu = ref("");
// const searchQuery = ref("");
const logoSrc = ref("/images/cyntech-tanks-logo-short.svg");
const copied = ref(false);

// Function to update logo based on screen width
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

// Toggle functions for search, phone, and menu
// function toggleSearch() {
//   searchOpen.value = !searchOpen.value;
//   if (phoneOpen.value) phoneOpen.value = false;
// }

function togglePhone() {
  phoneOpen.value = !phoneOpen.value;
  if (searchOpen.value) searchOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  subMenu.value = "";
}

// Toggle submenus for About Us and Services
function toggleSubMenu(menu) {
  subMenu.value = menu;
}

// Go back from submenu
function goBack() {
  subMenu.value = "";
}

// Close menu when clicking a NuxtLink
function closeMenu() {
  menuOpen.value = false;
}

// Close submenu when clicking a NuxtLink
function closeSubMenu() {
  subMenu.value = false;
}

// Execute search and clear search input
// function executeSearch() {
//   console.log(`Searching for: ${searchQuery.value}`);
//   searchQuery.value = "";
//   searchOpen.value = false;
// }

// Copy phone number function with timeout for copied state
function copyPhoneNumber() {
  const phoneNumber = "(403) 570-5860";
  navigator.clipboard.writeText(phoneNumber).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
      togglePhone();
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
