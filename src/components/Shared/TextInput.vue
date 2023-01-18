<template>
  <input
    data-test="text-input"
    :value="modelValue"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handelInput"
  />
</template>
<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      default: "placeholder",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handelInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
