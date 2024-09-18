<template>
  <section
    class="flex flex-col py-12 px-6 md:px-14 justify-center lg:min-w-full mb-8"
  >
    <div class="flex flex-col max-w-7xl mx-auto px-6 mb-14">
      <h2 class="text-2xl mb-8 text-gray-700">
        Check out our positions and requirements below, and if you would like to
        be part of the Cyntech Tanks team, send us your resume.
      </h2>
      <div class="flex justify-start">
        <button
          class="bg-[#1b3664] text-white px-6 py-3 md:hover:bg-gray-200 md:hover:text-[#1b3664] md:hover:border-[#1b3664] md:border-[#1b3664] md:border-2"
        >
          Send Us Your Resume
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-20 auto-rows-fr mx-auto justify-center"
    >
      <!-- Loop over job positions -->
      <article
        v-for="(job, index) in jobPositions"
        :key="index"
        class="group lg:w-[420px] cursor-pointer"
        @click="openJobModal(index)"
      >
        <section
          class="relative p-8 transition-all duration-300 overflow-hidden h-full flex flex-col border-2 border-[#fdc70c]"
        >
          <div
            class="absolute inset-0 w-[400px] h-[200px] bg-gray-100 transform origin-left rotate-45 -translate-y-[100px] -translate-x-[100px] md:group-hover:bg-[#E9EEF5]"
          ></div>
          <div class="relative z-10 flex-grow">
            <h3 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-4">
              {{ job.title }}
            </h3>
            <p class="text-gray-600 mb-8 font-light md:text-xl min-h-28">
              {{ job.shortDescription }}
            </p>
            <footer>
              <a
                href="#"
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>Learn more</span>
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

    <!-- Modal for Job Descriptions -->
    <div
      v-if="isJobModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeJobModal"
    >
      <div
        class="relative flex flex-col bg-white rounded-lg pb-4 pt-10 max-w-3xl w-full mx-4 md:max-h-[85vh] max-h-[90vh] min-w-[300px] min-h-[550px] overflow-hidden"
        @click.stop
      >
        <button
          class="absolute top-1 right-3 text-[#1b3664] md:hover:text-gray-800 text-2xl"
          @click="closeJobModal"
        >
          ✕
        </button>

        <!-- Job title and description -->
        <div class="p-8">
          <h2 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-6">
            {{ currentJob.title }}
          </h2>
          <p class="text-gray-700 text-lg mb-8">
            {{ currentJob.longDescription }}
          </p>
        </div>
      </div>
    </div>

    <!-- Blurred Background -->
    <div
      v-if="isJobModalOpen"
      class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-40"
    ></div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Job positions with title, short description, and long description
const jobPositions = [
  {
    title: "General Laborer",
    shortDescription: "Labourer position for our Aboveground Storage Tank Repair projects.",
    longDescription:
      "This is a general labourer position working on Aboveground Storage Tank (AST) repair projects. Responsibilities include assisting tradespeople, moving materials, site cleaning, and adhering to safety protocols.",
  },
  {
    title: "Safety Advisor",
    shortDescription: "Role for keeping the company abreast of changes in safety laws and regulations.",
    longDescription:
      "As a safety advisor, you will be responsible for ensuring the company complies with health and safety laws. You will conduct site inspections, develop safety policies, and provide training to staff.",
  },
  {
    title: "Site Supervisor",
    shortDescription: "Site Supervisor Position for our Aboveground Storage Tank Repair projects.",
    longDescription:
      "The Site Supervisor will oversee all aspects of site operations for AST repair projects. Key responsibilities include managing the workforce, ensuring project milestones are met, and maintaining compliance with safety regulations.",
  },
  {
    title: "Welder",
    shortDescription: "Welder position for the Aboveground Storage Tank Repair projects.",
    longDescription:
      "This welder position is specific to AST repair projects. You will be responsible for welding tank components, adhering to safety protocols, and working collaboratively with the site supervisor and engineers.",
  },
  {
    title: "Quality Assurance/Quality Control",
    shortDescription: "Position for API Aboveground Storage Tank Inspector.",
    longDescription:
      "The QA/QC inspector will be responsible for conducting quality assurance checks and ensuring compliance with API 653 standards. Duties include inspecting materials, welding quality, and ensuring tank repairs are conducted to the highest standards.",
  },
  {
    title: "Project Engineer",
    shortDescription: "Project Engineer position for Civil Engineers.",
    longDescription:
      "As a project engineer, you will work closely with the site supervisor and other engineers to ensure all engineering aspects of the AST repair projects are completed to specification. You will also manage engineering teams, liaise with clients, and provide project updates.",
  },
  {
    title: "Vacuum Truck Operator",
    shortDescription: "Vacuum truck operator position for our Aboveground Storage Tank Cleaning projects.",
    longDescription:
      "This position involves operating vacuum trucks for AST cleaning projects. Responsibilities include driving the truck, operating the vacuum equipment, and ensuring proper disposal of waste materials while adhering to safety protocols.",
  },
];

// Reactive variables for controlling job modal state and current job index
const isJobModalOpen = ref(false);
const currentIndex = ref(0);

// Function to open the job modal and set the current job index
const openJobModal = (index) => {
  currentIndex.value = index;
  isJobModalOpen.value = true;
};

// Function to close the job modal
const closeJobModal = () => {
  isJobModalOpen.value = false;
};

// Computed property to return the current job based on currentIndex
const currentJob = computed(() => jobPositions[currentIndex.value]);
</script>
