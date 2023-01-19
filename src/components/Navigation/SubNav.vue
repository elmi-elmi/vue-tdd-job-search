<template>
  <div class="h-16 w-full bg-white border-b border-solid border-brand-gray-1">
    <div class="h-full px-8 flex items-center">
      <div v-if="onJobResultPage" data-test="job-count">
        <font-awesome-icon :icon="['fs', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">1432</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    onJobResultPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>

<style scoped></style>
