<template>
  <div class="pb-4 min-w-full">
    <form
      action="https://formspree.io/f/mldrknba"
      method="POST"
      enctype="multipart/form-data"
    >
      <div class="flex flex-col mt-4 m-8 pt-4 max-w-5xl mx-auto">
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
          <span class="text-red-500 font-bold text-xs" v-if="errors.name">{{
            errors.name
          }}</span>
        </div>

        <div class="mb-4 pr-6 pl-6">
          <label for="email" class="block font-bold text-[#1b3664]"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            required
            class="block w-full shadow-none min-h-10 bg-[#808080] bg-opacity-30"
            :class="{ 'border-red-500': errors.email }"
          />
          <span class="text-red-500 font-bold text-xs" v-if="errors.email">{{
            errors.email
          }}</span>
        </div>

        <div class="mb-8 pr-6 pl-6">
          <label for="message" class="block font-bold text-[#1b3664]"
            >Your Message</label
          >
          <textarea
            v-model="message"
            id="message"
            name="message"
            required
            class="mt-1 block w-full shadow-none min-h-52 bg-[#808080] bg-opacity-30"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <button
            type="submit"
            class="mt-4 text-base bg-[#1b3664] text-white p-4 md:hover:bg-[#FFC107] md:hover:text-[#1b3664] flex text-center justify-center"
          >
            Send Message
          </button>
          <span
            class="text-red-500 font-bold text-xs ml-4"
            v-if="errors.message"
            >{{ errors.message }}</span
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: message } = useField("message");

const onSubmit = handleSubmit((values) => {
  if (Object.keys(errors.value).length === 0) {
    console.log("Form values:", values);
  } else {
    console.log("Form has errors:", errors.value);
  }
});
</script>
