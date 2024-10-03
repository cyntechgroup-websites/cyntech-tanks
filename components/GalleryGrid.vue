<template>
  <section
    class="flex flex-col lg:py-12 py-2 max-w-96 mx-auto md:mx-0 md:max-w-full md:px-14 justify-center lg:min-w-full items-center mb-20 lg:mb-4 mt-8"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-[1fr] mx-auto lg:mx-0"
    >
      <!-- Gallery Items -->
      <article
        v-for="(image, index) in galleryImages"
        :key="index"
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full relative"
        @click="openGallery(index)"
      >
        <!-- Responsive Image Container -->
        <div class="relative overflow-hidden mx-auto aspect-square shadow-lg rounded-sm">
          <img
            :src="image.slides[0].src"
            :alt="image.title"
            class="w-full h-full object-cover"
          />
          <!-- Slide-in Section -->
          <section
            class="absolute bottom-0 left-0 w-full md:h-1/2 h-1/4 bg-white p-2 flex items-center justify-between transition-all duration-300 ease-in-out md:transform md:translate-y-full md:group-hover:translate-y-0 lg:pl-10 md:pl-4"
          >
            <div class="flex flex-col z-10 flex-grow justify-center">
              <h3 class="text-base font-medium text-[#1b3664] mb-2">
                {{ image.title }}
              </h3>
              <p class="hidden md:block text-gray-600 mb-4 font-light max-w-80">
                {{ image.shortDescription }}
              </p>
              <footer>
                <a
                  href="#"
                  class="text-gray-500 font-normal flex items-center space-x-2"
                >
                  <span class="text-sm">See More</span>
                  <span
                    class="text-sm transition-transform duration-300 ease-in-out text-[#fdc70c]"
                    >→</span
                  >
                </a>
              </footer>
            </div>
          </section>
        </div>
      </article>
    </div>

    <!-- Modal for Gallery -->
    <div
      v-if="isGalleryOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeGallery"
    >
      <div
        class="relative flex flex-col bg-white rounded-lg pb-4 pt-10 max-w-3xl w-full mx-4 md:max-h-[85vh] max-h-[90vh] min-w-[300px] min-h-[550px] overflow-hidden"
        @click.stop
      >
        <button
          class="absolute top-1 right-3 text-[#1b3664] md:hover:text-gray-800 text-2xl"
          @click="closeGallery"
        >
          ✕
        </button>

        <!-- Responsive Image Container with Min Height -->
        <div
          class="relative overflow-hidden aspect-square md:aspect-video w-full h-auto"
        >
          <img
            :src="currentImage.slides[currentSlideIndex].src"
            alt="Gallery Image"
            class="w-full h-full object-cover overflow-hidden"
          />
          <button
            @click="prevImage"
            class="absolute inset-y-0 left-0 text-white text-2xl p-2 bg-[#1b3664] max-h-24 top-[50%]"
          >
            ←
          </button>
          <button
            @click="nextImage"
            class="absolute inset-y-0 right-0 text-white text-2xl p-2 bg-[#1b3664] max-h-24 top-[50%]"
          >
            →
          </button>
        </div>

        <div class="flex flex-col justify-between">
          <!-- Dots for slide navigation -->
          <div class="flex justify-center space-x-2 mt-4 items-center min-h-10">
            <button
              v-if="currentImage.slides.length > 1"
              @click="prevSlide"
              class="text-[#1b3664] text-2xl"
            >
              ←
            </button>
            <span
              v-for="(slide, index) in currentImage.slides"
              :key="index"
              class="h-2 w-2 rounded-full"
              :class="
                index === currentSlideIndex ? 'bg-[#fdc70c]' : 'bg-gray-400'
              "
              @click="goToSlide(index)"
            ></span>
            <button
              v-if="currentImage.slides.length > 1"
              @click="nextSlide"
              class="text-[#1b3664] text-2xl"
            >
              →
            </button>
          </div>
          <!-- Sliding description content -->
          <div class="relative w-full overflow-hidden">
            <!-- Title and yellow line stay in place -->
            <div class="w-full flex-shrink-0 p-4">
              <header>
                <hr
                  class="h-[2px] bg-[#fdc70c] mb-4 xs:translate-x-5 mx-auto xs:max-w-80 max-w-72 xs:mx-4"
                />
              </header>

              <h2 class="text-[#1b3664] text-2xl mb-4 mt-2 px-0 xs:px-4">
                {{ currentImage.title }}
              </h2>

              <!-- Only the description stays static -->
              <p class="text-gray-700 text-lg px-0 xs:px-4">
                {{ currentImage.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blurred Background -->
    <div
      v-if="isGalleryOpen"
      class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-40"
    ></div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Determine if the current device is mobile based on window width
const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

// Array of gallery images with multiple image slides and descriptions
const galleryImages = [
  {
    title: "Automated Welding",
    shortDescription: "Robotic and Track Welding Processes.",
    description: "Robotic and Track Welding Processes.",
    slides: [
      { src: "/images/automated-welding-1.jpg" },
      { src: "/images/automated-welding-2.jpg" },
      { src: "/images/automated-welding-3.jpg" },
      { src: "/images/automated-welding-4.jpg" },
    ],
  },
  {
    title: "Tank Isolation and Cleaning",
    shortDescription: "Before and After of a Tank Isolation Cleaning.",
    description: "Before and After of a Tank Isolation Cleaning.",
    slides: [
      { src: "/images/gallery-1.webp" }, // Add extra slides here
    ],
  },
  {
    title: "Tank Lifting and Levelling",
    shortDescription: "See how we level tanks with different techniques.",
    description: "See how we level tanks with different techniques.",
    slides: [
      { src: "/images/lifting-1.jpg" },
      { src: "/images/lifting-2.jpg" },
      { src: "/images/lifting-3.jpg" },
      { src: "/images/lifting-4.jpg" }, // Add extra slides here
    ],
  },
  {
    title: "Tank Foundation Reconstruction",
    shortDescription:
      "A few examples of projects requiring tanks reconstruction.",
    description: "A few examples of projects requiring tanks reconstruction.",
    slides: [{ src: "/images/tank-foundations.webp" }],
  },
  {
    title: "Concrete Ringwall / Pile Foundations",
    shortDescription:
      "Different types of pile foundations built by Cyntech Tanks.",
    description: "Different types of pile foundations built by Cyntech Tanks.",
    slides: [{ src: "/images/concrete-ringwall.webp" }],
  },
  {
    title: "Floor Repair and Replacement",
    shortDescription: "Examples of our floor replacement.",
    description: "Examples of our floor replacement.",
    slides: [{ src: "/images/floor-repair.webp" }],
  },
  {
    title: "Shell Course Repair and Replacement",
    shortDescription: "An inside look on how the shell is replaced.",
    description: "An inside look on how the shell is replaced.",
    slides: [{ src: "/images/shell-repair.jpg" }],
  },
  {
    title: "Door & Insert Sheets",
    shortDescription: "See the door sheets on the tanks.",
    description: "See the door sheets on the tanks.",
    slides: [{ src: "/images/door-insert-sheets.jpg" }],
  },
  {
    title: "Roof Repair and Replacement",
    shortDescription: "Drone photos of our tank roof repairs.",
    description: "Drone photos of our tank roof repairs.",
    slides: [
      { src: "/images/roof-repair-1.jpg" },
      { src: "/images/roof-repair-2.jpg" },
      { src: "/images/roof-repair-3.jpg" },
      { src: "/images/roof-repair-4.jpg" },
    ],
  },
  {
    title: "Piping / Tank Modifications",
    shortDescription: "Custom modifications to Piping.",
    description: "Custom modifications to Piping.",
    slides: [{ src: "/images/piping.jpg" }, { src: "/images/piping-tank.jpg" }],
  },
  {
    title: "Coatings",
    shortDescription: "Coating Preparation and Application.",
    description: "Coating Preparation and Application.",
    slides: [
      { src: "/images/coating-1.jpg" },
      { src: "/images/coating-2.jpg" },
    ],
  },
];

// Reactive variables for controlling modal state and current image index
const isGalleryOpen = ref(false);
const currentIndex = ref(0);
const currentSlideIndex = ref(0); // Track the current slide index

// Function to open gallery and set current image index
const openGallery = (index) => {
  currentIndex.value = index;
  currentSlideIndex.value = 0; // Reset slide to first
  isGalleryOpen.value = true;
};

// Function to close the gallery
const closeGallery = () => {
  isGalleryOpen.value = false;
};

// Computed property to return the current image based on currentIndex
const currentImage = computed(() => galleryImages[currentIndex.value]);

// Navigation between slides
const prevSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value > 0
      ? currentSlideIndex.value - 1
      : currentImage.value.slides.length - 1;
};

const nextSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value < currentImage.value.slides.length - 1
      ? currentSlideIndex.value + 1
      : 0;
};

// Go to specific slide when clicking on a dot
const goToSlide = (index) => {
  currentSlideIndex.value = index;
};

// Function to navigate between gallery images
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    currentSlideIndex.value = 0; // Reset slide to first when changing images
  } else {
    currentIndex.value = galleryImages.length - 1; // Loop back to the last image
    currentSlideIndex.value = 0;
  }
};

const nextImage = () => {
  if (currentIndex.value < galleryImages.length - 1) {
    currentIndex.value += 1;
    currentSlideIndex.value = 0; // Reset slide to first when changing images
  } else {
    currentIndex.value = 0; // Loop back to the first image
    currentSlideIndex.value = 0;
  }
};
</script>
