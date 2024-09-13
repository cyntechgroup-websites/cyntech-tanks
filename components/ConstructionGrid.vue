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
        <div
          class="relative overflow-hidden md:h-auto md:aspect-w-16 md:aspect-h-9"
        >
          <img
            src="/images/auto-welding.webp"
            alt="Gravel Ring Wall"
            class="w-full object-contain flex-grow"
            data-src="/images/auto-welding.webp"
            data-title="Automated Welding & Cutting System"
            data-description="Our automated welding & cutting system technological solution will reduce the time and Labour efforts required for your shell, floor and roof repairs and replacements. Our automated system not only welds but can precisely torch cut to project requirements. Cyntech is currently working on expanding our Automated Welding & Cutting System by incorporated Plasma Cutting & Sub Arch welding."
          />
        </div>
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
        <div
          class="relative overflow-hidden md:h-auto md:aspect-w-16 md:aspect-h-9"
        >
          <img
            src="/images/coating-removal.webp"
            alt="Heat Induction Coating Removal."
            class="w-full object-contain flex-grow"
            data-src="/images/coating-removal.webp"
            data-title="Heat Induction Coating Removal"
            data-description="Cyntech Has Utilized Heat Induction technology for the removal of Coating as an alternative to sandblast & chemicals. Safest, Healthiest and environmentally friendly solution for the removal of coatings."
          />
        </div>
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
              Heat Induction Coating Removal
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Alternative to sandblasting.
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
        <div
          class="relative overflow-hidden md:h-auto md:aspect-w-16 md:aspect-h-9"
        >
          <img
            src="/images/coatings.webp"
            alt="Coatings."
            class="w-full object-contain flex-grow"
            data-src="/images/coatings.webp"
            data-title="Coatings"
            data-description="Cyntech can provide skilled personnel to ensure all your coating needs are met. Can provide External & Internal Coatings as needed for your project."
          />
        </div>
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
              Coatings
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Cyntech can provide skilled personnel to ensure all your coating
              needs are met.
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
        <div
          class="relative overflow-hidden md:h-auto md:aspect-w-16 md:aspect-h-9"
        >
          <img
            src="/images/blast-trailer.png"
            alt="Blast Trailer"
            class="w-full object-contain flex-grow"
            data-src="/images/blast-trailer.png"
            data-title="Blast Trailer"
            data-description="Cyntech utilizes a blast-trailer filled with various blast media, dust collection equipment, and much more to meet all your blasting needs."
          />
        </div>
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
              Blast Trailer
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Cyntech utilizes a blast-trailer filled with various blast media.
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
    description:
      "Our automated welding & cutting system technological solution will reduce the time and Labour efforts required for your shell, floor and roof repairs and replacements. Our automated system not only welds but can precisely torch cut to project requirements. Cyntech is currently working on expanding our Automated Welding & Cutting System by incorporated Plasma Cutting & Sub Arch welding.",
  },
  {
    src: "/images/coating-removal.webp",
    title: "Heat Induction Coating Removal",
    description:
      "Cyntech Has Utilized Heat Induction technology for the removal of Coating as an alternative to sandblast & chemicals. Safest, Healthiest and environmentally friendly solution for the removal of coatings.",
  },
  {
    src: "/images/coatings.webp",
    title: "Coatings",
    description:
      "Cyntech can provide skilled personnel to ensure all your coating needs are met. Can provide External & Internal Coatings as needed for your project.",
  },
  {
    src: "/images/blast-trailer.png",
    title: "Blast Trailer",
    description:
      "Cyntech utilizes a blast-trailer filled with various blast media, dust collection equipment, and much more to meet all your blasting needs.",
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
