<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 hover:shadow-gray"
      data-test="job-list-router-link"
    >
      <div class="pt-4 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl capitalize" data-test="job-listing-title">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span data-test="job-listing-organization">{{
              job.organization
            }}</span>
          </div>
          <ul data-test="job-listing-locations">
            <li
              v-for="location in job.locations"
              :key="location"
              class="inline-block mr-5"
            >
              {{ location }}
            </li>
          </ul>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualification:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    jobPageLink() {
      const id = this.job.id;
      return `/job/results/${id}`;
    },
  },
};
</script>

<style scoped></style>
