<template>
  <div>
    <LeadershipFourHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-10 px-6"></div>
    <section
      class="flex flex-col lg:flex-row justify-center max-w-xl lg:max-w-7xl mx-auto mb-12 px-8"
    >
      <article class="flex mt-12 px-6 lg:min-w-96">
        <img
          src="/images/christine.png"
          alt="Christine Bulbeck"
          class="w-full h-full object-cover rounded-lg border-4 border-[#1b3664]"
        />
      </article>
      <article
        class="flex flex-col mt-12 px-6 leading-relaxed font-light text-lg justify-center"
      >
        <h2 class="text-3xl mb-6 text-[#1b3664] font-semibold">
          Health and Safety Manager
        </h2>
        <p class="text-gray-500 mb-6">
          Christine Bulbeck is the Health and Safety Manager of the Tanks Division bringing 20 years of comprehensive experience minimizing health and safety hazards in the oil and gas industry by developing and implementing successful health programs.
        </p>
        <p class="text-gray-500 mb-6">
          She completed her studies at the University of Alberta in Occupational Health and Safety in 2007 and received her CRSP Canadian Registered Safety Professional Designation in 2009 and a Learning and Development Designation in 2011.
        </p>
        <p class="text-gray-500 mb-6">
          Her areas of responsibility includes compliance with all provincial regulations relating to occupational safety and health. Providing leadership, training, information, resources, policy development, and consultation services to all Cyntank employees and subcontractors.
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
