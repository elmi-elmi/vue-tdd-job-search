<template>
  <form
    class="flex flex items-center border border-solid border-brand-gray-3 h-12 w-full rounded-3xl"
  >
    <font-awesome-icon :icon="['fa', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center h-full flex-1 pr-3">
        <label class="absolute -top-10 left-0">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="px-3 bg-brand-gray-2 border-l border-r border-solid border-brand-gray-3 h-full flex items-center"
        >in</span
      >
      <div class="relative flex items-center h-full flex-1 pl-3 pr-1">
        <label class="absolute -top-10 left-0">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="Shiraz"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton";
export default {
  name: "JobSearchForm",
  components: { ActionButton },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
