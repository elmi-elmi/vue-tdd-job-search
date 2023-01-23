<template>
  <div
    class="flex flex-col bg-white p-4 border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between items-center">
        <h3 class="text-base">What do you want to do?</h3>
        <ActionButton text="Clear Filters" type="secondary" class="text-sm" />
      </div>
      <JobSidebarOrganization />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton";
import JobSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization";
export default {
  name: "JobFilterSidebar",
  components: { ActionButton, JobSidebarOrganization },
};
</script>
