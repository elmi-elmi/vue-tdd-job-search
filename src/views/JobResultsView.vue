<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSidebar />
    <JobListings />
  </div>
</template>
<script>
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar";
import JobListings from "@/components/JobResults/JobListings";
export default {
  name: "JobResultView",
  components: { JobFilterSidebar, JobListings },
};
</script>
