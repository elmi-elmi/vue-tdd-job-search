<template>
  <header :class="['w-full', 'text-sm', 'font-semibold', headerHeightClass]">
    <div class="fixed w-full left-0 top-0 h-16 bg-white">
      <div
        class="flex flex-nowrap h-full mx-auto px-8 border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="text-xl h-full flex items-center"
        >
          {{ company }}
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:m-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
              >
                {{ menuItem.text }}
              </router-link>
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
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ActionButton from "@/components/Shared/ActionButton";
import ProfileImage from "@/components/Navigation/ProfileImage";
import SubNav from "@/components/Navigation/SubNav";
import { LOGIN_USER } from "@/store";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Bobo Careers",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Bobo Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Student", url: "/" },
        { text: "Jobs", url: "/job/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
