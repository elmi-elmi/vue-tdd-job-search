<template>
  <div>
    <MainNav />
    <router-view />
  </div>
</template>
<script>
import MainNav from "@/components/Navigation/MainNav";
export default {
  name: "App",
  components: { MainNav },
};
</script>
