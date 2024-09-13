<template>
  <div>
    <LeadershipTwoHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-10 px-6"></div>
    <section
      class="flex flex-col lg:flex-row justify-center max-w-xl lg:max-w-7xl mx-auto mb-12 px-8"
    >
      <article class="flex mt-12 px-6 lg:min-w-96 lg:max-w-96">
        <img
          src="/images/travis.jpg"
          alt="Travis Fedirko"
          class="w-full h-full object-cover rounded-lg border-4 border-[#1b3664]"
        />
      </article>
      <article
        class="flex flex-col mt-12 px-6 leading-relaxed font-light text-lg justify-center"
      >
        <h2 class="text-3xl mb-6 text-[#1b3664] font-semibold">
          Operations Manager
        </h2>
        <p class="text-gray-500 mb-6">
          Travis Fedirko is the Operations Manager of Cyntech Tanks.
        </p>
        <p class="text-gray-500 mb-6">
          Travis graduated from SAIT Polytechnic with a Diploma in Civil Engineering Technology. He is a Civil Engineering Technician (C.E.T.) and a PMP Blue Seal.
        </p>
        <p class="text-gray-500 mb-6">
          Travis has 12 years of experience in the construction industry. He is a member of ASET (The Association of Science and Engineering Technology).
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
