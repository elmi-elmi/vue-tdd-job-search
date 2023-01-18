<template>
  <main>
    <section class="h-screen flex flex-col pt-10 pb-20">
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
  </main>
</template>

<script>
import SectionHeadline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";
export default {
  name: "SectionHero",
  components: { SectionHeadline, JobSearchForm },
};
</script>

<style scoped></style>
