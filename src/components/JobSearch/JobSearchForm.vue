<template>
  <form
    class="flex flex items-center border border-solid border-brand-gray-3 h-12 w-full rounded-3xl"
  >
    <font-awesome-icon :icon="['fa', 'search']" class="ml-4 mr-3" />
    <div class="relative flex items-center h-full flex-1 pr-3">
      <label class="absolute -top-10 left-0">Role</label>
      <TextInput v-model="role" placeholder="Frontend engineer" />
    </div>
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <span
        class="px-3 bg-brand-gray-2 border-l border-r border-solid border-brand-gray-3 h-full flex items-center"
        >in</span
      >
      <div class="relative flex items-center h-full flex-1 pl-3 pr-1">
        <label class="absolute -top-10 left-0">Where?</label>
        <TextInput v-model="location" placeholder="Shiraz" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton";
import TextInput from "@/components/Shared/TextInput";
export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
