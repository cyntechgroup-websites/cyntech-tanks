<template>
  <section class="py-12 px-6 md:px-14">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <NuxtLink to="/leadership">
        <div class="group">
          <div
            class="h-[2px] w-52 bg-[#fdc70c] mb-4 block translate-x-10 md:group-hover:bg-[#1b3664]"
          ></div>
          <div class="relative p-8 transition-all duration-300 overflow-hidden">
            <div
              class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
            ></div>

            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
                Our Leadership
              </h3>
              <p class="text-gray-600 mb-8 font-light md:text-xl min-h-28">
                Meet some of the people responsible for keeping us at the
                forefront of the industry year after year.
              </p>
              <div
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>Learn more</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.transform {
  transform-origin: left center;
}
</style>
