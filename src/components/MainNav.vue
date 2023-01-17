<template>
  <header class="w-dull text-sm font-semibold">
    <div class="fixed w-full left-0 top-0 h-16 bg-white">
      <div
        class="flex flex-nowrap h-full mx-auto px-8 border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="text-xl h-full flex items-center">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full list-none">
            <li
              v-for="(menuItem, i) in menuItems"
              :key="i"
              class="h-full ml-9 first:m-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto h-full flex items-center">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <ActionButton v-else data-test="login-button" @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import ProfileImage from "@/components/ProfileImage";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  data() {
    return {
      company: "Bobo Careers",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo Corp",
        "How we hire",
        "Student",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
