<template>
  <header :class="['w-full', 'text-sm', 'font-semibold', headerHeightClass]">
    <div class="fixed w-full left-0 top-0 h-16 bg-white">
      <div
        class="flex flex-nowrap h-full mx-auto px-8 border-b border-solid border-brand-gray-1"
      >
        <a href="/public" class="text-xl h-full flex items-center">
          {{ company }}</a
        >
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
          <ActionButton
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton";
import ProfileImage from "@/components/Navigation/ProfileImage";
import SubNav from "@/components/Navigation/SubNav";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
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
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
