<template>
  <section class="pt-8 pb-8 px-6 md:px-14 md:pt-14">
    <main class="max-w-6xl mx-auto">
      <header class="flex justify-between items-center mb-6">
        <h2 class="font-medium text-[#1b3664] text-3xl">Our Projects</h2>
        <nav class="md:flex justify-center items-center hidden">
          <NuxtLink to="/gallery">
            <button
              class="bg-white text-[#1b3664] border border-gray-300 px-6 py-3 md:hover:bg-gray-200"
            >
              View Our Gallery
            </button>
          </NuxtLink>
        </nav>
      </header>

      <p class="text-lg text-gray-600 mb-8 md:text-xl font-light">
        Whether large or small, complex or simple, we take the time to
        understand every subsurface problem and provide the optimal,
        project-specific solution. The size of the project is irrelevant to
        us—what drives us is sharing in our client's satisfaction of a job well
        done.
      </p>

      <nav class="md:hidden mb-8">
        <NuxtLink to="/gallery">
          <button
            class="bg-white text-[#1b3664] border border-gray-300 px-6 py-3 md:hover:bg-gray-200"
          >
            View Our Gallery
          </button>
        </NuxtLink>
      </nav>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article class="border-b-2 border-gray-200 block md:hover:scale-105 transition-all duration-150 ease-in-out md:hover:border-gray-400">
          <NuxtLink to="/gallery">
            <img
              src="/public/images/tank-cleaning.webp"
              alt="Tank Cleaning"
              class="w-full object-cover mb-4"
            />
            <h3 class="text-xl font-bold text-[#1b3664]">Tank Cleaning</h3>
            <p class="text-gray-600 pb-4 flex items-center">
              <Icon icon="lucide:map-pin" class="text-gray-600 mr-2" /> Cold Lake,
              AB, Canada
            </p>
          </NuxtLink>
        </article>

        <article class="border-b-2 border-gray-200 block md:hover:scale-105 transition-all duration-150 ease-in-out md:hover:border-gray-400">
          <NuxtLink to="/gallery">
            <img
              src="/public/images/tank-shell-replacement.webp"
              alt="Tank Shell Replacement"
              class="w-full object-cover mb-4"
            />
            <h3 class="text-xl font-bold text-[#1b3664]">
              Tank Shell Replacement
            </h3>
            <p class="text-gray-600 pb-4 flex items-center">
              <Icon icon="lucide:map-pin" class="text-gray-600 mr-2" /> Cold Lake,
              AB, Canada
            </p>
          </NuxtLink>
        </article>
      </section>
    </main>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
