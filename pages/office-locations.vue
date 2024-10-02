<template>
  <LocationHero />
  <section class="w-full mx-auto py-8 px-12">
    <div class="flex flex-col max-w-[1000px] mx-auto">
      <div class="flex">
        <ContactMap />
      </div>
      <h2 class="text-2xl font-medium text-[#1b3664] mb-6">Canada</h2>

      <!-- Calgary Office -->
      <div class="mb-10 border-t pt-8 pb-4">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-medium text-gray-800">Calgary Office</h3>
          <div class="flex items-center space-x-2">
            <Icon icon="lucide:map-pin" class="w-4 h-4 text-gray-500" />
            <span class="text-gray-500">Calgary</span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between gap-6">
          <!-- Get in Touch -->
          <div class="mb-2 md:mb-0 ml-2.5 md:ml-0">
            <h4 class="font-semibold text-gray-700 mb-2">Get In Touch</h4>
            <p class="text-[#1b3664]"><strong>T: </strong>403-228-1767</p>
            <button
              class="flex text-[#1b3664 mb-4 min-w-52"
              @click="copyEmail('info@cyntechtanks.com', 1)"
            >
              <strong class="text-[#1b3664] mr-1">E: </strong>
              <span class="text-[#1b3664] block">
                <span class="underline" v-if="!copiedEmails[1]"
                  >info@cyntechtanks.com</span
                >
                <span
                  class="bg-[#fdc70c] p-1 no-underline rounded-md"
                  v-if="copiedEmails[1]"
                  >Copied To Clipboard!</span
                >
              </span>
            </button>
            <a
              href="https://maps.app.goo.gl/L2ZKHS9J5qay5bQL9"
              class="text-[#1b3664] flex items-center font-semibold"
              target="_blank"
            >
              <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> Google Maps
            </a>
          </div>

          <!-- Address -->
          <div class="mb-2 md:mb-0 ml-2.5 md:ml-0">
            <h4 class="font-semibold text-gray-700 mb-2">Address</h4>
            <p class="text-gray-500">
              31 Technology Way SE <br />
              Calgary, AB T3S 0B8
            </p>
          </div>

          <!-- Key Contacts -->
          <div class="flex flex-col min-w-44 ml-2.5 md:ml-0">
            <h4 class="font-semibold text-gray-700 mb-2">Key Contacts</h4>
            <div class="flex flex-col">
              <p class="text-gray-700 flex items-center">
                Travis Fedirko
                <button
                  class="flex"
                  @click="copyEmail('travis.fedirko@cyntechgroup.com', 4)"
                >
                  <div v-if="!copiedEmails[4]">
                    <Icon
                      icon="lucide:mail"
                      class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                    />
                  </div>
                  <div v-if="copiedEmails[4]">
                    <Icon
                      icon="lucide:mail"
                      class="w-4 h-4 ml-2 text-[#fdc70c] cursor-pointer"
                    />
                    <p
                      class="absolute bg-[#fdc70c] p-1 no-underline rounded-md translate-x-8 -translate-y-6"
                    >
                      Copied!
                    </p>
                  </div>
                </button>
              </p>
              <p class="text-gray-500 mb-4">Operations Manager</p>
              <p class="text-gray-700 flex items-center">
                Rick White
                <button
                  class="flex"
                  @click="copyEmail('rick.white@cyntechgroup.com', 5)"
                >
                  <div v-if="!copiedEmails[5]">
                    <Icon
                      icon="lucide:mail"
                      class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                    />
                  </div>
                  <div v-if="copiedEmails[5]">
                    <Icon
                      icon="lucide:mail"
                      class="w-4 h-4 ml-2 text-[#fdc70c] cursor-pointer"
                    />
                    <p
                      class="absolute bg-[#fdc70c] p-1 no-underline rounded-md translate-x-8 -translate-y-6"
                    >
                      Copied!
                    </p>
                  </div>
                </button>
              </p>
              <p class="text-gray-500">Vice President</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bonnyville Office -->
      <div class="mb-10 border-b pb-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-medium text-gray-800">Bonnyville Office</h3>
          <div class="flex items-center space-x-2">
            <Icon icon="lucide:map-pin" class="w-4 h-4 text-gray-500" />
            <span class="text-gray-500">Bonnyville</span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between">
          <!-- Get in Touch -->
          <div class="mb-6 md:mb-0 ml-2.5 md:ml-0">
            <h4 class="font-semibold text-gray-700 mb-2">Get In Touch</h4>
            <p class="text-[#1b3664]"><strong>T: </strong>403-228-1767</p>
            <button
              class="flex text-[#1b3664 mb-4 min-w-52"
              @click="copyEmail('info@cyntechtanks.com', 2)"
            >
              <strong class="text-[#1b3664] mr-1">E: </strong>
              <span class="text-[#1b3664] block">
                <span class="underline" v-if="!copiedEmails[2]"
                  >info@cyntechtanks.com</span
                >
                <span
                  class="bg-[#fdc70c] p-1 no-underline rounded-md"
                  v-if="copiedEmails[2]"
                  >Copied To Clipboard!</span
                >
              </span>
            </button>
            <a
              href="https://maps.app.goo.gl/9ST4izJuQLufX3Db9"
              class="text-[#1b3664] flex items-center font-semibold"
              target="_blank"
            >
              <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> Google Maps
            </a>
          </div>

          <!-- Address -->
          <div class="mb-6 md:mb-0 ml-2.5">
            <h4 class="font-semibold text-[#1b3664] mb-2">Address</h4>
            <p class="text-gray-500">
              6401-50 Ave <br />
              Bonnyville, AB T9N 2L9
            </p>
          </div>

          <!-- Key Contacts - Future Placeholder -->
          <div class="hidden md:flex md:invisible flex-col min-w-44">
            <h4 class="font-semibold text-gray-700 mb-2">Key Contacts</h4>
            <div class="flex flex-col">
              <p class="text-gray-700 flex items-center">
                Name Placeholder
                <Icon
                  icon="lucide:mail"
                  class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                />
              </p>
              <p class="text-gray-500 mb-4">Title Placeholder</p>
              <p class="text-gray-700 flex items-center">
                Name Placeholder
                <Icon
                  icon="lucide:mail"
                  class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                />
              </p>
              <p class="text-gray-500">Title Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-medium text-[#1b3664] my-6">USA</h2>

      <!-- Plantersville Office -->
      <div class="mb-10 border-b border-t pt-8 pb-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-medium text-gray-800">
            Plantersville Office
          </h3>
          <div class="flex items-center space-x-2">
            <Icon icon="lucide:map-pin" class="w-4 h-4 text-gray-500" />
            <span class="text-gray-500">Plantersville</span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between">
          <!-- Get in Touch -->
          <div class="mb-6 md:mb-0 ml-2.5 md:ml-0">
            <h4 class="font-semibold text-[#1b3664] mb-2">Get In Touch</h4>
            <p class="text-[#1b3664]"><strong>T: </strong>936-206-7810</p>
            <button
              class="flex text-[#1b3664 mb-4 min-w-52"
              @click="copyEmail('info@cyntechgroup.com', 3)"
            >
              <strong class="text-[#1b3664] mr-1">E: </strong>
              <span class="text-[#1b3664] block">
                <span class="underline" v-if="!copiedEmails[3]"
                  >info@cyntechgroup.com</span
                >
                <span
                  class="bg-[#fdc70c] p-1 no-underline rounded-md"
                  v-if="copiedEmails[3]"
                  >Copied To Clipboard!</span
                >
              </span>
            </button>
            <a
              href="https://maps.app.goo.gl/teU8o3uaq8aQcid29"
              class="text-[#1b3664] flex items-center font-semibold"
              target="_blank"
            >
              <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> Google Maps
            </a>
          </div>

          <!-- Address -->
          <div class="mb-6 md:mb-0 ml-2.5 md:ml-6">
            <h4 class="font-semibold text-[#1b3664] mb-2">Address</h4>
            <p class="text-gray-500">
              17807 TX-105 <br />
              Plantersville, Texas 77363
            </p>
          </div>

          <!-- Key Contacts - Future Placeholder -->
          <div class="hidden md:flex md:invisible flex-col min-w-44">
            <h4 class="font-semibold text-gray-700 mb-2">Key Contacts</h4>
            <div class="flex flex-col">
              <p class="text-gray-700 flex items-center">
                Name Placeholder
                <Icon
                  icon="lucide:mail"
                  class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                />
              </p>
              <p class="text-gray-500 mb-4">Title Placeholder</p>
              <p class="text-gray-700 flex items-center">
                Name Placeholder
                <Icon
                  icon="lucide:mail"
                  class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                />
              </p>
              <p class="text-gray-500">Title Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const copiedEmails = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
});

function copyEmail(email, buttonIndex) {
  navigator.clipboard.writeText(email).then(() => {
    // Reset all copied states first
    copiedEmails.value = { 1: false, 2: false, 3: false, 4: false, 5: false };

    // Set copied state for the clicked button
    copiedEmails.value[buttonIndex] = true;

    // Reset after 1 second
    setTimeout(() => {
      copiedEmails.value[buttonIndex] = false;
    }, 1000);
  });
}
</script>