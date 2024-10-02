<template>
  <div>
    <EngineeringHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-12 px-6"></div>
    <section
      class="flex flex-col mt-0 lg:flex-row justify-center max-w-7xl mx-auto"
    >
      <!-- // If you want to change the content, edit the white text only. -->
      <article>
        <section class="flex flex-col pt-12 pb-4 px-10 justify-center mb-8">
          <h2 class="text-2xl mb-4 text-[#1b3664] font-semibold">
            Our Process
          </h2>
          <h3 class="text-xl text-gray-500">
            Our API certified Aboveground Storage Tank Inspectors will provide
            inspection and consultation services to ensure compliance with
            applicable codes and standards. Cyntech also offers customized
            service packages to suit your specific needs.
          </h3>
          <h3 class="text-xl text-gray-500 mt-4">
            Every tank upgrading project has its challenges, and we will work
            with you to optimize project safety, tank integrity, as well as
            resources and materials.
          </h3>
        </section>
        <section class="flex flex-col pb-4 px-10 justify-center mb-8">
          <EngineeringGrid />
        </section>
      </article>
    </section>
  </div>
</template>
