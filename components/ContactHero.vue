<template>
  <div class="bg-gray-200 z-10">
    <div class="relative overflow-hidden max-w-[1400px] mx-auto">
      <section
        class="flex flex-col md:flex-row-reverse items-center bg-gray-200 h-auto max-h-[250px]"
      >
        <article class="hidden md:relative md:block w-full md:w-1/2 h-[250px]">
          <img
            src="/images/contact-hero.jpg"
            alt="Slide 1 Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gray-200 clip-triangle"></div>
        </article>

        <article
          class="w-full md:w-1/2 px-10 pt-10 pb-10 min-h-[200px] mx-auto flex justify-center flex-col"
        >
          <h2
            class="text-[#1b3664] text-3xl md:text-4xl font-semibold text-center mb-2 lg:text-start lg:ml-8"
          >
            Contact Us
          </h2>
          <h3
            class="text-gray-600 text-xl font-light text-center lg:text-start lg:ml-8"
          >
            Get In Touch With Us
          </h3>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 100% 0, 0% 0%, 0% 100%);
  position: absolute;
  z-index: 10 !important;
}

@media (min-width: 768px) {
  .clip-triangle {
    clip-path: polygon(0 0, 100% 0, 20% 0%, 0% 100%);
    position: absolute;
    z-index: 10;
  }
}
</style>
