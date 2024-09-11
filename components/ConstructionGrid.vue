<template>
  <section
    class="flex flex-col lg:py-12 py-2 px-6 md:px-14 justify-center lg:min-w-full items-center mb-20 lg:mb-4"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 auto-rows-[1fr] mx-auto lg:mx-0"
    >
      <!-- First Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(0)"
      >
        <img
          src="/images/auto-welding.webp"
          alt="Gravel Ring Wall"
          class="w-full object-contain flex-grow"
          data-src="/images/auto-welding.webp"
          data-title="Automated Welding & Cutting System"
          data-description="Our automated welding & cutting system technological solution will reduce the time and Labour efforts required for your shell, floor and roof repairs and replacements. Our automated system not only welds but can precisely torch cut to project requirements. Cyntech is currently working on expanding our Automated Welding & Cutting System by incorporated Plasma Cutting & Sub Arch welding."
        />
        <header>
          <hr
            class="h-[2px] w-52 bg-[#fdc70c] my-4 translate-x-10 md:group-hover:bg-[#1b3664]"
          />
        </header>
        <section
          class="relative p-8 transition-all duration-300 overflow-hidden flex-grow flex flex-col"
        >
          <div
            class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
          ></div>
          <div class="relative z-10 flex-grow">
            <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
              Automated Welding & Cutting System
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Reduces Time and Labour Efforts.
            </p>
            <footer>
              <a
                href="#"
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>See More</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </a>
            </footer>
          </div>
        </section>
      </article>

      <!-- Second Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(1)"
      >
        <img
          src="/images/reinforced-ring-wall.webp"
          alt="Reinforced Ring Wall."
          class="w-full object-contain flex-grow"
          data-src="/images/reinforced-ring-wall.webp"
          data-title="Reinforced Ring Wall"
          data-description="Reinforced Concrete Ringwall is a more sound solution to tank settlement. Our civil engineers are experts and can design and draft an optimal ringwall for a variety of site conditions."
        />
        <header>
          <hr
            class="h-[2px] w-52 bg-[#fdc70c] my-4 translate-x-10 md:group-hover:bg-[#1b3664]"
          />
        </header>
        <section
          class="relative p-8 transition-all duration-300 overflow-hidden flex-grow flex flex-col"
        >
          <div
            class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
          ></div>
          <div class="relative z-10 flex-grow">
            <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
              Reinforced Ring Wall
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              More sound option to tank settlement.
            </p>
            <footer>
              <a
                href="#"
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>See More</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </a>
            </footer>
          </div>
        </section>
      </article>

      <!-- Third Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(2)"
      >
        <img
          src="/images/helical-piles.webp"
          alt="Reinforced Ring Helical Piles."
          class="w-full object-contain flex-grow"
          data-src="/images/helical-piles.webp"
          data-title="Reinforced Ring Helical Piles"
          data-description="In addition to our reinforced concrete ringwalls, we team up with our Anchor Division and combine a deep foundation solution for tanks that are founded on undesirable bases."
        />
        <header>
          <hr
            class="h-[2px] w-52 bg-[#fdc70c] my-4 translate-x-10 md:group-hover:bg-[#1b3664]"
          />
        </header>
        <section
          class="relative p-8 transition-all duration-300 overflow-hidden flex-grow flex flex-col"
        >
          <div
            class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
          ></div>
          <div class="relative z-10 flex-grow">
            <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
              Reinforced Ring Helical Piles
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Deep foundation solution for tanks that are founded on undesirable bases.
            </p>
            <footer>
              <a
                href="#"
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>See More</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </a>
            </footer>
          </div>
        </section>
      </article>

      <!-- Forth Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(3)"
      >
        <img
          src="/images/grout-injection.webp"
          alt="Grout Injection"
          class="w-full object-contain flex-grow"
          data-src="/images/grout-injection.webp"
          data-title="Grout Injection"
          data-description="We install a low strength grout that is equivalent to a compacted gravel ringwall as a cost-effective solution to soft foundations."
        />
        <header>
          <hr
            class="h-[2px] w-52 bg-[#fdc70c] my-4 translate-x-10 md:group-hover:bg-[#1b3664]"
          />
        </header>
        <section
          class="relative p-8 transition-all duration-300 overflow-hidden flex-grow flex flex-col"
        >
          <div
            class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
          ></div>
          <div class="relative z-10 flex-grow">
            <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
              Grout Injection
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Cost-effective soft foundation.
            </p>
            <footer>
              <a
                href="#"
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>See More</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </a>
            </footer>
          </div>
        </section>
      </article>

      <!-- Popup Modal -->
      <div
        v-if="isGalleryOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeGallery"
      >
        <div
          class="relative bg-white rounded-lg p-0 max-w-3xl w-full mx-4"
          @click.stop
        >
          <button
            class="absolute top-0 right-2 text-[#1b3664] md:hover:text-gray-800 text-2xl"
            @click="closeGallery"
          >
            ✕
          </button>
          <img
            :src="currentImage.src"
            alt="Gallery Image"
            class="w-full object-cover rounded-md p-6 mt-2"
          />
          <div>
            <!-- Arrows for navigation -->
            <div class="flex justify-between items-center px-8">
              <button @click="prevImage" class="text-[#1b3664] text-2xl">
                ←
              </button>
              <button @click="nextImage" class="text-[#1b3664] text-2xl">
                →
              </button>
            </div>
            <header>
              <hr class="h-[2px] w-52 bg-[#fdc70c] my-4 translate-x-10" />
            </header>
            <h2 class="text-[#1b3664] text-2xl mb-4 mt-6 px-8">
              {{ currentImage.title }}
            </h2>
            <p class="text-gray-700 text-lg mb-8 px-8">
              {{ currentImage.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Blurred Background -->
      <div
        v-if="isGalleryOpen"
        class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-40"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Array of gallery images with src, title, and description
const galleryImages = [
  {
    src: "/images/auto-welding.webp",
    title: "Automated Welding & Cutting System",
    description: "Our automated welding & cutting system technological solution will reduce the time and Labour efforts required for your shell, floor and roof repairs and replacements. Our automated system not only welds but can precisely torch cut to project requirements. Cyntech is currently working on expanding our Automated Welding & Cutting System by incorporated Plasma Cutting & Sub Arch welding.",
  },
  {
    src: "/images/coating-removal.webp",
    title: "Heat Induction Coating Removal",
    description: "Cyntech Has Utilized Heat Induction technology for the removal of Coating as an alternative to sandblast & chemicals. Safest, Healthiest and environmentally friendly solution for the removal of coatings.",
  },
  {
    src: "/images/coatings.webp",
    title: "Coatings",
    description: "Cyntech can provide skilled personnel to ensure all your coating needs are met. Can provide External & Internal Coatings as needed for your project.",
  },
  {
    src: "/images/blast-trailer.webp",
    title: "Blast Trailer",
    description: "Cyntech utilizes a blast-trailer filled with various blast media, dust collection equipment, and much more to meet all your blasting needs.",
  },
];

// Reactive variables for controlling modal state and current image index
const isGalleryOpen = ref(false);
const currentIndex = ref(0);

// Function to open gallery and set current image index
const openGallery = (index) => {
  currentIndex.value = index;
  isGalleryOpen.value = true;
};

// Function to close the gallery
const closeGallery = () => {
  isGalleryOpen.value = false;
};

// Computed property to return the current image based on currentIndex
const currentImage = computed(() => galleryImages[currentIndex.value]);

// Function to navigate to the previous image
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  } else {
    currentIndex.value = galleryImages.length - 1; // Loop back to the last image
  }
};

// Function to navigate to the next image
const nextImage = () => {
  if (currentIndex.value < galleryImages.length - 1) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = 0; // Loop back to the first image
  }
};
</script>
