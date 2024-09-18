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
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-medium text-gray-800">Calgary Office</h3>
            <div class="flex items-center space-x-2">
              <Icon icon="lucide:map-pin" class="w-4 h-4 text-gray-500" />
              <span class="text-gray-500">Calgary</span>
            </div>
          </div>
  
          <div class="flex flex-col md:flex-row justify-between gap-6">
            <!-- Get in Touch -->
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-gray-700 mb-2">Get in touch</h4>
              <p class="text-[#1b3664]"><strong>T: </strong>403-228-1767</p>
              <p class="text-[#1b3664] mb-4">
                <strong>E: </strong>
                <a
                  href="mailto:info@cyntechtanks.com"
                  class="text-[#1b3664] underline"
                  >info@cyntechtanks.com</a
                >
              </p>
              <a href="https://maps.app.goo.gl/RATqbir46cpb1e5Z7" class="text-[#1b3664] flex items-center font-semibold" target="_blank" >
                <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> View on map
              </a>
            </div>
  
            <!-- Address -->
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-gray-700 mb-2">Address</h4>
              <p class="text-gray-500">
                31 Technology Way SE <br />
                Calgary, AB T3S 0B8
              </p>
            </div>
  
            <!-- Key Contacts -->
            <div class="flex flex-col min-w-44">
              <h4 class="font-semibold text-gray-700 mb-2">Key contacts</h4>
              <div class="flex flex-col">
                <p class="text-gray-700 flex items-center">
                  Travis Fedirko
                  <Icon
                    icon="lucide:mail"
                    class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                  />
                </p>
                <p class="text-gray-500 mb-4">Operations Manager</p>
                <p class="text-gray-700 flex items-center">
                  Rick White
                  <Icon
                    icon="lucide:mail"
                    class="w-4 h-4 ml-2 text-[#1b3664] cursor-pointer"
                  />
                </p>
                <p class="text-gray-500">Vice President</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Bonnyville Office -->
        <div class="mb-10 border-b pb-8">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-medium text-gray-800">Bonnyville Office</h3>
            <div class="flex items-center space-x-2">
              <Icon icon="lucide:map-pin" class="w-4 h-4 text-gray-500" />
              <span class="text-gray-500">Bonnyville</span>
            </div>
          </div>
  
          <div class="flex flex-col md:flex-row justify-between">
            <!-- Get in Touch -->
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-gray-700 mb-2">Get in touch</h4>
              <p class="text-[#1b3664]"><strong>T: </strong>403-228-1767</p>
              <p class="text-[#1b3664] mb-4">
                <strong>E: </strong>
                <a
                  href="mailto:info@cyntechtanks.com"
                  class="text-[#1b3664] underline"
                  >info@cyntechtanks.com</a
                >
              </p>
              <a href="#" class="text-[#1b3664] flex items-cente font-semibold">
                <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> View on map
              </a>
            </div>
  
            <!-- Address -->
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-[#1b3664] mb-2">Address</h4>
              <p class="text-[#1b3664]">
                6401-50 Ave <br />
                Bonnyville, AB T9N 2L9
              </p>
            </div>
          </div>
        </div>
  
        <h2 class="text-2xl font-medium text-[#1b3664] my-6">USA</h2>
  
        <!-- Plantersville Office -->
        <div class="mb-10 border-b border-t pt-8 pb-8">
          <div class="flex justify-between items-center mb-4">
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
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-[#1b3664] mb-2">Get in touch</h4>
              <p class="text-[#1b3664]"><strong>T: </strong>936-206-7810</p>
              <p class="text-[#1b3664] mb-4">
                <strong>E: </strong>
                <a
                  href="mailto:info@cyntechgroup.com"
                  class="text-[#1b3664] underline"
                  >info@cyntechgroup.com</a
                >
              </p>
              <a href="#" class="text-[#1b3664] flex items-center font-semibold">
                <Icon icon="lucide:map" class="w-4 h-4 mr-2" /> View on map
              </a>
            </div>
  
            <!-- Address -->
            <div class="mb-6 md:mb-0">
              <h4 class="font-semibold text-[#1b3664] mb-2">Address</h4>
              <p class="text-[#1b3664]">
                17807 TX-105 <br />
                Plantersville, Texas 77363
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Icon } from "@iconify/vue";
  </script>
  