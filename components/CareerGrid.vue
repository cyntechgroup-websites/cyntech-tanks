<template>
  <!-- Main Section -->
  <section
    class="flex flex-col py-12 px-6 md:px-14 justify-center lg:min-w-full mb-8"
  >
    <!-- Heading and Intro -->
    <header class="flex flex-col max-w-7xl mx-auto px-6 mb-2 items-center">
      <h2 class="text-2xl mb-8 text-gray-700">
        Check out our positions and requirements below, and if you would like to
        be part of the Cyntech Tanks team, send us your resume.
      </h2>
    </header>

    <!-- Dropdown Trigger -->
    <div class="flex justify-center items-center max-w-4xl mx-auto mb-10">
      <button
        @click="toggleForm"
        class="flex items-center text-[#1b3664] font-bold text-lg"
      >
        Upload Your Resume
        <svg
          :class="{ 'transform rotate-180': isFormOpen }"
          class="w-5 h-5 ml-2 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Form Section -->
    <form
      v-if="isFormOpen"
      action="https://formspree.io/f/mbljgvqq"
      method="POST"
      enctype="multipart/form-data"
      @submit="validateForm"
      class="flex flex-col max-w-4xl mx-auto mb-14"
    >
      <!-- Name Input Field -->
      <div class="mb-4 pr-6 pl-6">
        <label for="name" class="block font-bold text-[#1b3664]">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          required
          class="block w-full shadow-none min-h-10 bg-[#808080] bg-opacity-30"
          :class="{ 'border-red-500': errors.name }"
        />
        <span class="text-red-500 font-bold text-xs" v-if="errors.name">
          {{ errors.name }}
        </span>
      </div>

      <!-- Email Input Field -->
      <div class="mb-4 pr-6 pl-6">
        <label for="email" class="block font-bold text-[#1b3664]">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          required
          class="block w-full shadow-none min-h-10 bg-[#808080] bg-opacity-30"
          :class="{ 'border-red-500': errors.email }"
        />
        <span class="text-red-500 font-bold text-xs" v-if="errors.email">
          {{ errors.email }}
        </span>
      </div>

      <!-- Resume Upload Input Field -->
      <div class="mb-4 pr-6 pl-6">
        <label for="resumeUpload" class="block font-bold text-[#1b3664]"
          >Upload Your Resume</label
        >
        <input
          type="file"
          name="resumeUpload"
          accept=".pdf,.doc,.docx"
          @change="handleFileChange"
          required
          class="mb-2"
        />
        <span
          class="text-red-500 font-bold text-xs"
          v-if="errors.resumeUpload"
        >
          {{ errors.resumeUpload }}
        </span>
      </div>

      <!-- Submit Button -->
      <div class="pr-6 pl-6">
        <button
          type="submit"
          class="mt-2 text-base bg-[#1b3664] text-white p-4 md:hover:bg-[#FFC107] md:hover:text-[#1b3664] flex text-center justify-center"
        >
          Send Resume
        </button>
      </div>
    </form>

    <!-- Job Positions Grid -->
    <section
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
              <span
                class="text-[#1b3664] font-normal flex items-center space-x-2"
              >
                <span>Learn more</span>
                <span
                  class="text-xl md:group-hover:translate-x-4 transition-transform duration-300 ease-in-out"
                  >→</span
                >
              </span>
            </footer>
          </div>
        </section>
      </article>
    </section>

    <!-- Modal for Job Descriptions -->
    <div
      v-if="isJobModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeJobModal"
    >
      <section
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
        <div class="p-8 overflow-auto">
          <h2 class="text-2xl md:text-3xl font-medium text-[#1b3664] mb-6">
            {{ currentJob.title }}
          </h2>
          <p class="text-gray-700 text-lg mb-8">
            {{ currentJob.longDescription }}
          </p>
        </div>
      </section>
    </div>

    <!-- Blurred Background for Modal -->
    <div
      v-if="isJobModalOpen"
      class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-40"
    ></div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

// Job positions with title, short description, and long description
const jobPositions = [
  {
    title: 'General Laborer',
    shortDescription:
      'Labourer position for our Aboveground Storage Tank Repair projects.',
    longDescription:
      'This is a general labourer position working on Aboveground Storage Tank (AST) repair projects. Responsibilities include assisting tradespeople, moving materials, site cleaning, and adhering to safety protocols.',
  },
  {
    title: 'Safety Advisor',
    shortDescription:
      'Role for keeping the company abreast of changes in safety laws and regulations.',
    longDescription:
      'As a safety advisor, you will be responsible for ensuring the company complies with health and safety laws. You will conduct site inspections, develop safety policies, and provide training to staff.',
  },
  {
    title: 'Site Supervisor',
    shortDescription:
      'Site Supervisor Position for our Aboveground Storage Tank Repair projects.',
    longDescription:
      'The Site Supervisor will oversee all aspects of site operations for AST repair projects. Key responsibilities include managing the workforce, ensuring project milestones are met, and maintaining compliance with safety regulations.',
  },
  {
    title: 'Welder',
    shortDescription:
      'Welder position for the Aboveground Storage Tank Repair projects.',
    longDescription:
      'This welder position is specific to AST repair projects. You will be responsible for welding tank components, adhering to safety protocols, and working collaboratively with the site supervisor and engineers.',
  },
  {
    title: 'Quality Assurance/Quality Control',
    shortDescription: 'Position for API Aboveground Storage Tank Inspector.',
    longDescription:
      'The QA/QC inspector will be responsible for conducting quality assurance checks and ensuring compliance with API 653 standards. Duties include inspecting materials, welding quality, and ensuring tank repairs are conducted to the highest standards.',
  },
  {
    title: 'Project Engineer',
    shortDescription: 'Project Engineer position for Civil Engineers.',
    longDescription:
      'As a project engineer, you will work closely with the site supervisor and other engineers to ensure all engineering aspects of the AST repair projects are completed to specification. You will also manage engineering teams, liaise with clients, and provide project updates.',
  },
  {
    title: 'Vacuum Truck Operator',
    shortDescription:
      'Vacuum truck operator position for our Aboveground Storage Tank Cleaning projects.',
    longDescription:
      'This position involves operating vacuum trucks for AST cleaning projects. Responsibilities include driving the truck, operating the vacuum equipment, and ensuring proper disposal of waste materials while adhering to safety protocols.',
  },
];

// Modal state variables
const isJobModalOpen = ref(false);
const currentIndex = ref(0);

// Function to open the job modal
const openJobModal = (index) => {
  currentIndex.value = index;
  isJobModalOpen.value = true;
};

// Function to close the job modal
const closeJobModal = () => {
  isJobModalOpen.value = false;
};

// Computed property for the current job
const currentJob = computed(() => jobPositions[currentIndex.value]);

// Dropdown form visibility
const isFormOpen = ref(false);

// Function to toggle form visibility
const toggleForm = () => {
  isFormOpen.value = !isFormOpen.value;
};

// Validation schema using Yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  resumeUpload: yup
    .mixed()
    .required('Please upload a resume')
    .test(
      'fileType',
      'Unsupported file format. Allowed formats: .pdf, .doc, .docx',
      (value) => {
        if (!value || !value.type) return false;
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        return allowedTypes.includes(value.type);
      }
    ),
});

// Vee-validate form setup
const { errors, validate } = useForm({
  validationSchema: schema,
});

// Use fields for name, email, and resume upload
const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: resumeUpload } = useField('resumeUpload');

// Function to handle file change event
const handleFileChange = (event) => {
  resumeUpload.value = event.target.files[0];
};

// Form submission handler
const validateForm = async (event) => {
  const isValid = await validate();
  if (!isValid) {
    // Prevent form submission if validation fails
    event.preventDefault();
  }
  // If valid, form will submit naturally
};
</script>
