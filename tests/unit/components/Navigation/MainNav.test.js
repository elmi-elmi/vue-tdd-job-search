import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
// import { createStore } from "vuex";
import { LOGIN_USER } from "@/store";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      // plugins: [store],
      mocks: { $store },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("displays company name", async () => {
    const $store = { state: { isLoggedIn: false } };
    const wrapper = shallowMount(MainNav, createConfig($store));

    await wrapper.setData({
      company: "super",
    });
    expect(wrapper.text()).toMatch("super");
  });
  it("displays menu items for navigation", () => {
    const $store = { state: { isLoggedIn: false } };
    const wrapper = shallowMount(MainNav, createConfig($store));

    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Student",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const $store = { state: { isLoggedIn: false } };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
    it("issues call to Vuex to login user", async () => {
      const $store = { state: { isLoggedIn: false } };
      const wrapper = shallowMount(MainNav, createConfig($store));

      $store.commit = jest.fn();
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");
      expect($store.commit).toHaveBeenCalledWith(LOGIN_USER);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", async () => {
      const $store = { state: { isLoggedIn: true } };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays sub-navigation menu with additional information", async () => {
      const $store = { state: { isLoggedIn: true } };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
