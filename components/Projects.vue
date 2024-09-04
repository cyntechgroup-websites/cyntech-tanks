<template>
  <section class="pt-8 pb-8 px-6 md:px-14 md:pt-14">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-medium text-[#1b3664] mb-4 md:text-3xl">
        Our Projects
      </h2>
      <p class="text-lg text-gray-600 mb-8 md:text-xl font-light">
        Whether large or small, complex or simple, we take the time to
        understand every subsurface problem and provide the optimal,
        project-specific solution. The size of the project is irrelevant to
        us—what drives us is sharing in our client's satisfaction of a job well
        done.
      </p>
      <div class="flex justify-start md:justify-end">
        <button
          class="bg-white text-[#1b3664] border border-gray-300 px-6 py-3 mb-12 md:mb-8 md:hover:bg-gray-200"
        >
          View all projects
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          href="project-link-1"
          class="border-b-2 border-gray-200 block md:hover:scale-105 transition-all duration-150 ease-in-out md:hover:border-gray-400"
        >
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
        </a>

        <a
          href="project-link-2"
          class="border-b-2 border-gray-200 block md:hover:scale-105 transition-all duration-150 ease-in-out md:hover:border-gray-400"
        >
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
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
