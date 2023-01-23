<template>
  <SharedAccordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <label :for="organization" data-test="organization-label">
              {{ organization }}</label
            >
          </li>
        </ul>
      </fieldset>
    </div>
  </SharedAccordion>
</template>

<script>
import SharedAccordion from "@/components/Shared/SharedAccordion";
export default {
  name: "JobSidebarOrganization",
  components: { SharedAccordion },
  computed: {
    UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS;
    },
  },
};
</script>

<style scoped></style>
