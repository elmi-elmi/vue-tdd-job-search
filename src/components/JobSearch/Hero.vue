<template>
  <main class="h-screen flex flex-col">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <SectionHeadline />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img src="@/assets/logo.png" alt="logo" class="w-80 h-80" />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <SpotlightComp class="flex flex-row justify-center pb-16">
      <template #default="{ title, description, img }">
        <router-link
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
          to="/job/results"
        >
          <img :src="img" alt="job" class="object-contain" />
          <div class="h48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">{{ title }}</h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>
          <router-link
            to="/job/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs
          </router-link>
        </router-link></template
      >
    </SpotlightComp>
  </main>
</template>

<script>
import SectionHeadline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";
import SpotlightComp from "@/components/JobSearch/SpotlightComp";
export default {
  name: "SectionHero",
  components: { SectionHeadline, JobSearchForm, SpotlightComp },
};
</script>

<style scoped></style>
