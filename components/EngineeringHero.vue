<template>
  <div class="bg-[#1b3664] z-10">
    <div class="relative overflow-hidden max-w-[1400px] mx-auto">
      <section
        class="flex flex-col md:flex-row-reverse items-center bg-[#1b3664] h-auto"
      >
        <article
          class="relative w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <img
            src="/images/tank-cleaning.webp"
            alt="Construction, Repair and Maintenance Hero Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-[#1b3664] clip-triangle"></div>
        </article>

        <article
          class="w-full md:w-1/2 px-10 pt-10 pb-10 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mx-auto flex justify-center flex-col"
        >
          <h2 class="text-[#fdc70c] text-3xl md:text-4xl font-semibold mb-4">
            Engineering Services
          </h2>
          <p class="text-white text-xl lg:text-2xl font-light leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum id corporis ducimus iusto recusandae tenetur velit, libero maxime optio.
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped>
.clip-triangle {
  clip-path: polygon(0 0, 100% 0, 0% 0%, 0% 100%);
}

@media (min-width: 768px) {
  .clip-triangle {
    clip-path: polygon(0 0, 100% 0, 20% 0%, 0% 100%);
  }
}
</style>
