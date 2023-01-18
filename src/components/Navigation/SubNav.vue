<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1">
    <div
      v-if="onJobResultPage"
      class="h-full px-8 flex items-center"
      data-test="job-count"
    >
      <font-awesome-icon :icon="['fs', 'search']" class="mr-3" />
      <span>
        <span class="text-brand-green-1">1432</span>
        jobs matched
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultPage: true,
    };
  },
};
</script>

<style scoped></style>
