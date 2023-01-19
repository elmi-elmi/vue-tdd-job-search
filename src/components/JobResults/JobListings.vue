<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing
        v-for="job in displayedJobs"
        :key="job.id"
        data-test="job-listing"
        :job="job"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/JobResults/JobListing";
export default {
  name: "JobListings",
  components: { JobListing },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      console.log(nextPage);
      const maxPage = this.jobs.length / 10;
      console.log(nextPage, maxPage);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const url = "http://localhost:3000/jobs";
    const response = await axios.get(url);
    this.jobs = response.data;
  },
};
</script>

<style scoped></style>
