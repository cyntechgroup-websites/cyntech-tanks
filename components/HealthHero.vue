<template>
  <section
    class="flex flex-col md:flex-row-reverse items-center bg-gray-200 h-auto max-h-[250px]"
  >
    <article class="hidden md:relative md:block w-full md:w-1/2 h-[250px]">
      <img
        src="https://picsum.photos/600/400"
        alt="Slide 1 Image"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gray-200 clip-triangle"></div>
    </article>

    <article
      class="w-full md:w-1/2 px-10 pt-10 pb-10 min-h-[200px] mx-auto flex justify-center flex-col"
    >
      <h2 class="text-[#1b3664] text-3xl md:text-4xl font-semibold text-center">
        Our Commitment to Health and Safety
      </h2>
    </article>
  </section>
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
