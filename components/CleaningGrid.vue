<template>
  <section
    class="flex flex-col lg:py-12 py-2 px-6 md:px-14 justify-center lg:min-w-full items-center mb-20 lg:mb-4"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 auto-rows-fr mx-auto lg:mx-0"
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
            src="/images/rotary-jet.webp"
            alt="Rotary Jet System"
            class="w-full object-cover flex-grow"
            data-src="/images/rotary-jet.webp"
            data-title="Rotary Jet System"
            data-description="Economic option that saves water."
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
              Rotary Jet System
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Economic option that saves water.
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
            src="/images/pressure-cleaning.webp"
            alt="Pressure Cleaning."
            class="w-full object-contain flex-grow"
            data-src="/images/pressure-cleaning.webp"
            data-title="Pressure Cleaning"
            data-description="Used mostly to remove oil from surfaces."
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
              Pressure Cleaning
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Used mostly to remove oil from surfaces.
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
            src="/images/vac-truck.png"
            alt="Vac-Truck & Trailer."
            class="w-full object-contain flex-grow"
            data-src="/images/vac-truck.png"
            data-title="Vac-Truck & Trailer"
            data-description="Semi Truck ensures quick & efficient disposal of waste."
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
              Vac-Truck & Trailer
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Semi Truck ensures quick & efficient disposal of waste.
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
            src="/images/sludge.webp"
            alt="Sludge Profiling"
            class="w-full object-contain flex-grow"
            data-src="/images/sludge.webp"
            data-title="Sludge Profiling"
            data-description="Thermal imaging technology is used to determine sludge levels."
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
              Sludge Profiling
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Thermal imaging technology is used to determine sludge levels.
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
            <p
              class="text-gray-700 text-lg mb-8 px-8"
              v-html="currentImage.description"
            ></p>
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
    src: "/images/rotary-jet.webp",
    title: "Rotary Jet System",
    description:
      "Cyntech employs rotary jet heads for efficient tank cleaning, which minimizes the use of water and chemicals. This approach not only reduces disposal costs but also shortens the time required for entry personnel, making the overall process more streamlined and cost-effective.",
  },
  {
    src: "/images/pressure-cleaning.webp",
    title: "Pressure Cleaning",
    description: `
    <strong>Lances:</strong><br>
    • Used in conjunction with rotary jets to ensure efficient delivery of liquids.<br>
    • Allows for debulking without tank entry.<br>
    • Ensures a safe & efficient cleaning process.<br><br>

    <strong>Robotic Water Cannons:</strong><br>
    • Used for the initial cleaning process.<br>
    • Breaks up large volumes of sludge without tank entry.<br>
    • Reduces confined space entry time for personnel.<br><br>

    <strong>Steam Cleaning/High-Pressure Wand Washing:</strong><br>
    • Uses high-pressure washer units with up to 4000 PSI @ 12GPM.<br>
    • Removes oil & residue from surfaces.<br>
    • Cyntech selects appropriate chemicals to produce effective cleaning rates while minimizing water consumption.
  `,
  },
  {
    src: "/images/vac-truck.png",
    title: "Vac-Truck & Trailer",
    description: `
    <strong>Vac-Truck:</strong><br>
    • Cyntech currently owns a Semi-Vac truck to ensure the water/sludge mixture is vacuumed and hauled off-site.<br>
    • Ensures quick & efficient disposal of waste.<br><br>

    <strong>Wash & Air-Trailer:</strong><br>
    • Cyntech utilizes a wash trailer filled with various other cleaning equipment.<br>
    • Cyntech utilizes an air-trailer to ensure entry personnel have access to air and various confined space equipment when necessary.<br>
  `,
  },
  {
    src: "/images/sludge.webp",
    title: "Sludge Profiling",
    description: `
    • Works with local subcontractor, to utilize thermal imaging technology to determine sludge levels through out tank when entry is not possible.<br><br>
    • For this coming year we are working to acquire this technology and provide this as an in-house service.<br>
  `,
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
