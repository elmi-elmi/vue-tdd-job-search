<template>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h1 class="w-full my-4 font-light text-base">
        It's awesome working here. Why don't you come join us?
      </h1></template
    >
  </HeaderContainer>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer";
export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>

<style scoped></style>
