<template>
  <section>
    <h1 class="font-bold tracking-tighter text-8xl" data-test="action-phrase">
      <span :class="actionClass">{{ action }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font=light">Find your job at Bobo Corp.</h2>
  </section>
</template>
<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "SectionHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
      actions: ["Build", "Create", "Design", "Code"],
    };
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.action = nextElementInList(this.actions, this.action);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
