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
          src="/images/gallery-1.webp"
          alt="Before and After of a Tank Isolation Cleaning."
          class="w-full object-contain flex-grow"
          data-src="/images/gallery-1.webp"
          data-title="Tank Isolation and Cleaning"
          data-description="Before and After of a Tank Isolation Cleaning."
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
              Tank Isolation and Cleaning
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Before and after of a tank isolation cleaning.
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
          src="/images/gallery-hero.webp"
          alt="Tank Lifting and Levelling."
          class="w-full object-contain flex-grow"
          data-src="/images/gallery-hero.webp"
          data-title="Tank Lifting and Levelling"
          data-description="See how we level tanks with different techniques."
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
              Tank Lifting and Levelling
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              See how we level tanks with different techniques.
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
          src="/images/tank-foundations.webp"
          alt="Tank Foundation Reconstruction."
          class="w-full object-contain flex-grow"
          data-src="/images/tank-foundations.webp"
          data-title="Tank Foundation Reconstruction"
          data-description="A few examples of projects requiring tanks reconstruction."
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
              Tank Foundation Reconstruction
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              A few examples of projects requiring tanks reconstruction.
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
          src="/images/concrete-ringwall.webp"
          alt="Different types of pile foundations built by Cyntech Tanks."
          class="w-full object-contain flex-grow"
          data-src="/images/concrete-ringwall.webp"
          data-title="Concrete Ringwall / Pile Foundations"
          data-description="Different types of pile foundations built by Cyntech Tanks."
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
              Concrete Ringwall / Pile Foundations
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Different types of pile foundations built by Cyntech Tanks.
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

      <!-- Fifth Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(4)"
      >
        <img
          src="/images/floor-repair.webp"
          alt="Floor Repair and Replacement."
          class="w-full object-contain flex-grow"
          data-src="/images/floor-repair.webp"
          data-title="Floor Repair and Replacement"
          data-description="Examples of our floor replacement."
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
              Floor Repair and Replacement
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Examples of our floor replacement.
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

      <!-- Sixth Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(5)"
      >
        <img
          src="/images/shell-repair.webp"
          alt="Shell Course Repair and Replacement."
          class="w-full object-contain flex-grow"
          data-src="/images/shell-repair.webp"
          data-title="Shell Course Repair and Replacement"
          data-description="An inside look on how the shell is replaced."
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
              Shell Course Repair and Replacement
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              An inside look on how the shell is replaced.
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

      <!-- Seventh Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(6)"
      >
        <img
          src="/images/door-insert-sheets.webp"
          alt="Door & Insert Sheets."
          class="w-full object-contain flex-grow"
          data-src="/images/door-insert-sheets.webp"
          data-title="Door & Insert Sheets"
          data-description="See the door sheets on the tanks."
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
              Door & Insert Sheets
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              See the door sheets on the tanks.
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

      <!-- Eighth Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(7)"
      >
        <img
          src="/images/roof-repair.webp"
          alt="Roof Repair and Replacement."
          class="w-full object-contain flex-grow"
          data-src="/images/roof-repair.webp"
          data-title="Roof Repair and Replacement"
          data-description="Drone photos of our tank roof repairs."
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
              Roof Repair and Replacement
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Drone photos of our tank roof repairs.
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

      <!-- Ninth Gallery Item -->
      <article
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(8)"
      >
        <img
          src="/images/piping-tank.jpg"
          alt="Piping/Tank Modifications."
          class="w-full object-contain flex-grow"
          data-src="/images/piping-tank.jpg"
          data-title="Piping / Tank Modifications"
          data-description="Custom modifications to Piping."
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
              Piping / Tank Modifications
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl">
              Custom modifications to Piping.
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
            class="absolute top-0 right-2 text-[#1b3664] md:hover:text-gray-800 text-3xl"
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
    src: "/images/gallery-1.webp",
    title: "Tank Isolation and Cleaning",
    description: "Before and After of a Tank Isolation Cleaning.",
  },
  {
    src: "/images/gallery-hero.webp",
    title: "Tank Lifting and Levelling",
    description: "See how we level tanks with different techniques.",
  },
  {
    src: "/images/tank-foundations.webp",
    title: "Tank Foundation Reconstruction",
    description: "A few examples of projects requiring tanks reconstruction.",
  },
  {
    src: "/images/concrete-ringwall.webp",
    title: "Concrete Ringwall / Pile Foundations",
    description: "Different types of pile foundations built by Cyntech Tanks.",
  },
  {
    src: "/images/floor-repair.webp",
    title: "Floor Repair and Replacement",
    description: "Examples of our floor replacement.",
  },
  {
    src: "/images/shell-repair.webp",
    title: "Shell Course Repair and Replacement",
    description: "An inside look on how the shell is replaced.",
  },
  {
    src: "/images/door-insert-sheets.webp",
    title: "Door & Insert Sheets",
    description: "See the door sheets on the tanks.",
  },
  {
    src: "/images/roof-repair.webp",
    title: "Roof Repair and Replacement",
    description: "Drone photos of our tank roof repairs.",
  },
  {
    src: "/images/piping-tank.jpg",
    title: "Piping / Tank Modifications",
    description: "Custom modifications to Piping.",
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
