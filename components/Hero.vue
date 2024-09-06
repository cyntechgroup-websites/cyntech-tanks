<template>
  <div class="bg-[#FFC107] z-10">
    <section class="relative overflow-hidden max-w-[1400px] mx-auto">
      <div
        class="flex transition-transform duration-700 ease-in-out h-full -mb-1"
        :class="{
          'transform -translate-x-full': currentSlide === 2,
          'transform translate-x-0': currentSlide === 1,
        }"
      >
        <section
          class="min-w-full flex flex-col md:flex-row-reverse items-center bg-[#FFC107]"
        >
          <article class="relative w-full md:h-full md:w-1/2">
            <img
              src="/public/images/who-we-are.webp"
              alt="Slide 1 Image"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#FFC107] clip-triangle"></div>
          </article>

          <article
            class="flex flex-col w-full md:w-1/2 px-8 pt-12 md:pt-20 pb-0 md:pb-20 md:min-h-[420px] md:max-w-[400px] mx-auto justify-center align-middle h-full"
          >
            <h2 class="text-[#1b3664] text-3xl md:text-4xl font-semibold mb-4">
              Who We Are
            </h2>
            <p class="text-[#1b3664] mb-8 text-xl lg:text-xl font-light">
              We are an experienced team of professionals providing comprehensive
              cleaning, inspection, engineering, mechanical and structural
              services for storage tanks and storage infrastructure.
            </p>
            <NuxtLink to="/about-us">
              <button
                class="px-6 py-3 bg-white text-[#1b3664] font-normal text-base md:hover:bg-gray-200"
              >
                About Us
              </button>
            </NuxtLink>
          </article>
        </section>

        <section
          class="min-w-full flex flex-col md:flex-row items-center bg-[#FFC107]"
        >
          <article class="relative w-full md:h-full md:w-1/2">
            <img
              src="/public/images/shell-replacement.webp"
              alt="Slide 2 Image"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-[#FFC107] clip-triangle-reverse"
            ></div>
          </article>

          <article
            class="flex flex-col w-full md:w-1/2 px-8 pt-12 md:pt-20 pb-0 md:pb-20 md:min-h-[420px] md:max-w-[400px] mx-auto justify-center align-middle h-full"
          >
            <h2 class="text-[#1b3664] text-3xl md:text-4xl font-semibold mb-4">
              What We Do
            </h2>
            <p class="text-[#1b3664] mb-8 text-xl lg:text-xl font-light">
              Cyntech specializes in innovative, cost-effective, and reliable
              storage tank services to the energy and petrochemical, pipeline, and
              construction industries.
            </p>
            <NuxtLink to="/our-services">
              <button
                class="px-6 py-3 bg-white text-[#1b3664] font-normal text-base md:hover:bg-gray-200"
              >
                Read More
              </button>
            </NuxtLink>
          </article>
        </section>
      </div>

      <div class="md:hidden flex justify-center mb-6 mt-6 py-4">
        <div
          class="w-12 h-1 mx-1 cursor-pointer"
          :class="currentSlide === 1 ? 'bg-[#1b3664]' : 'bg-white'"
          @click="currentSlide = 1"
        ></div>
        <div
          class="w-12 h-1 mx-1 cursor-pointer"
          :class="currentSlide === 2 ? 'bg-[#1b3664]' : 'bg-white'"
          @click="currentSlide = 2"
        ></div>
      </div>

      <div class="hidden md:flex justify-center -translate-y-7">
        <div
          class="w-12 h-1 mx-1 cursor-pointer"
          :class="currentSlide === 1 ? 'bg-[#1b3664]' : 'bg-white'"
          @click="currentSlide = 1"
        ></div>
        <div
          class="w-12 h-1 mx-1 cursor-pointer"
          :class="currentSlide === 2 ? 'bg-[#1b3664]' : 'bg-white'"
          @click="currentSlide = 2"
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentSlide = ref(1);

onMounted(() => {
  setInterval(() => {
    currentSlide.value = currentSlide.value === 1 ? 2 : 1;
  }, 5000);
});
</script>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 100% 0, 0% 0%, 0% 100%);
}

@media (min-width: 768px) {
  .clip-triangle {
    clip-path: polygon(0 0, 100% 0, 20% 0%, 0% 100%);
  }
}

.clip-triangle-reverse {
  clip-path: polygon(0 0, 100% 0, 0% 0%, 0% 100%);
}

@media (min-width: 768px) {
  .clip-triangle-reverse {
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 80% 100%);
  }
}
</style>
