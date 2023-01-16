<template>
  <header class="w-dull text-sm">
    <div class="fixed w-full left-0 top-0 h-16 bg-white">
      <div
        class="flex flex-nowrap h-full mx-auto px-8 border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="text-xl h-full flex items-center">{{ company }}</a>
        <h2 class="flex h-full items-center ml-8">
          Developed by {{ author.firstname }} {{ author.lastname }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bobo Careers",
      author: {
        firstname: "Alireza",
        lastname: "elmi",
      },
    };
  },
};
</script>
