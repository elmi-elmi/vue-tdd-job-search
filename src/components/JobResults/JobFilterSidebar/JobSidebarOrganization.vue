<template>
  <SharedAccordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="vue" type="checkbox" class="mr-3" />
            <label for="vue">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="vue2" type="checkbox" class="mr-3" />
            <label for="vue2">BetweenVue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="vue3" type="checkbox" class="mr-3" />
            <label for="vue3">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="vue4" type="checkbox" class="mr-3" />
            <label for="vue4">Vue and a Half Men</label>
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
};
</script>

<style scoped></style>
