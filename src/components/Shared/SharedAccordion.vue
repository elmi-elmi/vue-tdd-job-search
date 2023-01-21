<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap justify-between items-center cursor-pointer"
      data-test="accordion-clickable-area"
      @click="open"
    >
      <h3 class="font-semibold text-base">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedAccordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fa", "angle-up"] : ["fa", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
