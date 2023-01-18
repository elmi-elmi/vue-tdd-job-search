<template>
  <main>
    <section class="h-screen flex flex-col pt-10 pb-20 bg-yellow-300">
      <div class="grid grid-cols-12">
        <div class="border border-blue-100 col-start-1 col-span-1">1 cos</div>
        <div class="border border-blue-100 col-start-2 col-span-5">
          5 cos <SectionHeadline />
        </div>
        <div class="border border-blue-100 col-start-7 col-span-5">5 cos</div>
        <div class="border border-blue-100 col-start-12 col-span-1">1 cos</div>
      </div>
    </section>
  </main>
</template>

<script>
import SectionHeadline from "@/components/Headline";
export default {
  name: "SectionHero",
  components: { SectionHeadline },
};
</script>

<style scoped></style>
