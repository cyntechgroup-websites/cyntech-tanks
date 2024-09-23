<template>
  <section
    class="flex flex-col lg:py-12 py-2 px-6 md:px-14 justify-center lg:min-w-full items-center mb-20 lg:mb-4"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 auto-rows-[1fr] mx-auto lg:mx-0"
    >
      <!-- Gallery Items -->
      <article
        v-for="(image, index) in galleryImages"
        :key="index"
        class="group lg:w-[420px] cursor-pointer flex flex-col h-full"
        @click="openGallery(index)"
      >
        <!-- Responsive Image Container -->
        <div
          class="relative overflow-hidden max-w-[420px] max-h-96 aspect-square md:aspect-video"
        >
          <img
            :src="image.src"
            :alt="image.title"
            class="w-full h-full object-cover"
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
              {{ image.title }}
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl max-w-80">
              {{ image.shortDescription }}
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
            :src="currentImage.src"
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
          <!-- Sliding description content -->
          <div class="relative w-full overflow-hidden mt-4">
            <!-- Title and yellow line stay in place -->
            <div class="w-full flex-shrink-0 p-4">
              <header>
                <hr
                  class="h-[2px] bg-[#fdc70c] my-4 xs:translate-x-5 mx-auto xs:max-w-80 max-w-72 xs:mx-4"
                />
              </header>

              <h2 class="text-[#1b3664] text-2xl mb-4 mt-2 px-0 xs:px-4">
                {{ currentImage.title }}
              </h2>

              <!-- Only the description slides -->
              <div class="relative w-full overflow-hidden">
                <div
                  class="flex transition-transform duration-500"
                  :style="{
                    transform: `translateX(-${currentSlideIndex * 100}%)`,
                  }"
                >
                  <div
                    v-for="(
                      content, index
                    ) in currentImage.longDescriptionSlides"
                    :key="index"
                    class="w-full flex-shrink-0"
                  >
                    <!-- Long description for each slide -->
                    <p
                      class="text-gray-700 text-lg px-0 xs:px-4"
                      v-html="content"
                    ></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dots for slide navigation -->
            <div
              class="flex justify-center space-x-2 mt-4 items-center min-h-10"
            >
              <button
                v-if="currentImage.longDescriptionSlides.length > 1"
                @click="prevSlide"
                class="text-[#1b3664] text-2xl"
              >
                ←
              </button>
              <span
                v-for="(content, index) in currentImage.longDescriptionSlides"
                :key="index"
                class="h-2 w-2 rounded-full"
                :class="
                  index === currentSlideIndex ? 'bg-[#fdc70c]' : 'bg-gray-400'
                "
                @click="goToSlide(index)"
              ></span>
              <button
                v-if="currentImage.longDescriptionSlides.length > 1"
                @click="nextSlide"
                class="text-[#1b3664] text-2xl"
              >
                →
              </button>
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

// Array of gallery images with src, title, short description, and long description slides
const galleryImages = [
  {
    src: "/images/airbag.webp",
    title: "Airbag System",
    shortDescription: "Our system allows tank integrity to be mantained.",
    longDescriptionSlides: [
      "Cyntech utilizes a unique airbag lifting system to elevate the tank from its base to allow for remedial action. Our system offers tremendous advantages over conventional hydraulic jacking methods, including maintaining tank integrity, requiring no concrete support system, and avoiding the need for welding on the tank shell.",
    ],
  },
  {
    src: "/images/remediation.webp",
    title: "Lifting & Remediation",
    shortDescription:
      "Including tank lifting, levelling, repair or replacement of roofs and floors.",
    longDescriptionSlides: [
      "Our services include tank lifting, levelling, repair or replacement of roofs and floors, shell repairs, and reconstruction of foundations, along with edge settlement repair, installation of secondary containment liners, and cathodic protection.",
    ],
  },
  {
    src: "/images/vac-truck.png",
    title: "Tank Relocation",
    shortDescription: "Tank relocation for significant cost savings.",
    longDescriptionSlides: [
      "Relocating existing tanks can result in substantial cost savings compared to the expense of building new tank facilities. Cyntech's skilled and experienced crews specialize in providing comprehensive tank relocation services, whether overland or via navigable waterways.",
      "<strong>Our tank relocation services include:</strong> \
       <ul class='list-disc pl-5 space-y-2 mt-2'> \
         <li>Temporary relocation to facilitate groundwork without requiring work underneath the tank</li> \
         <li>Moving the tank to a new pad within the existing berm</li> \
       </ul>",
      "<ul class='list-disc pl-5 space-y-2'> \
        <li>Relocating the tank to a different area within the same tank farm</li> \
        <li>Transporting the tank to an entirely new site</li> \
         <li>Our certified, expert welders and specialized equipment ensure the job is completed accurately, efficiently, and with minimized downtime.</li> \
         </ul>",
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
      : currentImage.value.longDescriptionSlides.length - 1;
};

const nextSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value <
    currentImage.value.longDescriptionSlides.length - 1
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
