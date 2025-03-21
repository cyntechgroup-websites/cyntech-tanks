<template>
  <div>
    <LeadershipOneHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-10 px-6"></div>
    <section
      class="flex flex-col lg:flex-row justify-center max-w-xl lg:max-w-7xl mx-auto mb-12 px-8"
    >
      <article class="flex mt-12 px-6 lg:min-w-96">
        <img
          src="/images/rick.jpg"
          alt="Rick White"
          class="w-full h-full object-cover rounded-lg border-4 border-[#1b3664]"
        />
      </article>
      <article
        class="flex flex-col mt-12 px-6 leading-relaxed font-light text-lg justify-center"
      >
        <h2 class="text-3xl mb-6 text-[#1b3664] font-semibold">
          Vice President
        </h2>
        <p class="text-gray-500 mb-6">
          As Vice President of the Tanks division, Rick oversees the day-to-day
          Operations of the business.
        </p>
        <p class="text-gray-500 mb-6">
          Rick is a Mechanical Engineer with over 30 years of experience in the
          Oil & Gas and Petrochemical industries. He has held numerous positions
          in Development, Engineering, Projects and Operations throughout
          Western Canada, the Middle East and South America. Rick's experience
          and leadership will drive Responsible and Sustainable growth
          delivering Safe and Value focused projects for our clients.
        </p>
        <p class="text-gray-500 mb-6">
          Rick enjoys family time, travelling, baseball and the Calgary
          Stampede.
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
