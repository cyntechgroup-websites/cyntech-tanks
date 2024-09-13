<template>
  <div>
    <LeadershipThreeHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-10 px-6"></div>
    <section
      class="flex flex-col lg:flex-row justify-center max-w-xl lg:max-w-7xl mx-auto mb-12 px-8"
    >
      <article class="flex mt-12 px-6 lg:min-w-96 lg:max-w-96">
        <img
          src="/images/thomas.png"
          alt="Thomas Alberda"
          class="w-full h-full object-cover rounded-lg border-4 border-[#1b3664]"
        />
      </article>
      <article
        class="flex flex-col mt-12 px-6 leading-relaxed font-light text-lg justify-center"
      >
        <h2 class="text-3xl mb-6 text-[#1b3664] font-semibold">
          Senior Engineer
        </h2>
        <p class="text-gray-500 mb-6">
          Thomas Alberda is a Senior Engineer at Cyntech Tanks.
        </p>
        <p class="text-gray-500 mb-6">
          Tom holds a B.Sc. in Engineering from the University of Calgary. He is a Professional Engineer registered in Alberta and Ontario. He is also registered with the American Petroleum Institute as an API 653 inspector since 2006.
        </p>
        <p class="text-gray-500 mb-6">
          He joined Cyntech in 2004 and has been working in various positions including Senior Project Manager before taking his considerable knowledge to work on the engineering quality side of Cyntech.
        </p>
      </article>
    </section>
    <NuxtLink to="/leadership">
      <div class="flex justify-center space-x-6 mt-4 mb-12">
        <div
          class="mt-2 text-lg bg-[#1b3664] text-white px-4 py-2 md:hover:bg-[#FFC107] md:hover:text-[#1b3664] flex text-center justify-center"
        >
          Go Back
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
