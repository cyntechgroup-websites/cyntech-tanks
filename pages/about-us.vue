<template>
  <div>
    <AboutHero />
    <div class="border-b-2 max-w-[1150px] mx-auto min-h-2 pt-12 px-6"></div>
    <section
      class="flex flex-col mt-10 lg:mt-0 lg:flex-row justify-center max-w-7xl mx-auto"
    >
      <AboutSideNav />
      <article>
        <div class="flex flex-col max-w-7xl mx-auto mt-4 pt-6 px-6 md:px-10">
          <h2 class="text-2xl mb-8 text-gray-700">
            Cyntech has built a solid reputation throughout North America as an
            industry leader in providing innovative, comprehensive, and reliable
            storage tank upgrading services.
          </h2>
          <h3 class="text-xl text-gray-500">
            Cyntech Group's professional engineers and experienced staff will
            provide you with the expertise and safety standards to bring your
            projects to successful completion.
          </h3>
        </div>
        <AboutLearnMore />
        <div class="flex flex-col max-w-7xl mx-auto pt-4 px-6 md:px-10">
          <h2 class="text-2xl mb-8 text-[#1b3664] font-semibold">
            Why Choose Us?
          </h2>
          <h3 class="text-xl text-gray-500">
            With full in-house engineering and design capabilities, Cyntech
            offers services from project conception to completion. In addition,
            we provide a complete turnkey service including all aspects of
            engineering, cleaning, inspection, and repairs for your tank
            project.
          </h3>
          <h2 class="text-2xl mt-12 text-[#1b3664] font-semibold">
            Some of Our Clients 
          </h2>
        </div>
        <div
          class="w-full max-w-5xl mt-8 text-center justify-center align-middle items-center object-center mb-12 px-8"
        >
          <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
            <div
              v-for="(client, index) in Clients"
              :key="index"
              class="flex flex-col space-y-2 p-2 py-8 border-2 border-[#1b3664] rounded-lg text-center justify-center align-middle items-center object-center min-w-52 md:min-w-40"
            >
              <img
                :src="`/images/${client.image}`"
                :alt="client.name"
                class="w-52 h-52 object-contain md:w-32 md:h-32 mb-4"
              />
              <p class="text-gray-500">{{ client.name }}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Clients = ref([
  { name: "Cenovus Energy", image: "cenovus.png" },
  { name: "Co-op", image: "coop.png" },
  { name: "Exxon Mobil", image: "exxon.png" },
  { name: "ChampionX", image: "championx.png" },
  { name: "Shell", image: "shell.png" },
  { name: "Chevron", image: "chevron.png" },
  { name: "Devon", image: "devon.png" },
  { name: "Husky", image: "husky.jpg" },
  { name: "Nalco Water", image: "nalco.png" },
  { name: "Canada National Defence", image: "canada.png" },
  { name: "Suncor", image: "suncor.png" },
  { name: "Canadian Natural", image: "canadian-natural.png" },
  { name: "Encana", image: "encana.png" },
  { name: "Imperial", image: "imperial.png" },
  { name: "Pembina", image: "pembina.png" },
  { name: "Conoco Phillips", image: "conoco.png" },
  { name: "Enmax", image: "enmax.png" },
  { name: "Kinder Morgan", image: "kinder.png" },
  { name: "Petro Canada", image: "petro.png" },
  { name: "Trans Mountain", image: "trans.png" },
  { name: "Strathcona Resources", image: "strathcona.jpg" },
  { name: "Enbridge", image: "enbridge.png" },
  { name: "McAsphalt Industries", image: "mcasphalt.jpg" },
  { name: "Transcanada Energy", image: "trans-energy.jpg" },
  { name: "CN Rail", image: "cnrail.png" },
]);
</script>
