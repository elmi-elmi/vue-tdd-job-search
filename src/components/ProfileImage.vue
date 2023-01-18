<template>
  <img
    :src="url"
    alt="user image"
    class="h-8 w-8 object-contain"
    data-test="profile-image"
  />
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
