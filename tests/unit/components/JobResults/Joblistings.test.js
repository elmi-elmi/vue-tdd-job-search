import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  beforeEach(() => {});
  afterEach(() => {});

  const createStore = (config = {}) => ({
    dispatch: jest.fn(),
    state: { jobs: Array(15).fill({}) },
    ...config,
  });
  const createRoutes = (query = {}) => ({
    query: { page: "1", ...query },
  });
  const createConfig = ($route, $store) => ({
    global: {
      mocks: { $route, $store },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  describe("when component mounted", () => {
    it("makes call to fetch jobs from API", () => {
      const $store = createStore();
      const $route = createRoutes();
      shallowMount(JobListings, createConfig($route, $store));
      expect($store.dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
    it("fetch jobs", () => {
      const $store = createStore({ state: { jobs: Array(15).fill({}) } });
      const $route = createRoutes();
      shallowMount(JobListings, createConfig($route, $store));
      expect($store.state.jobs).toEqual(Array(15).fill({}));
    });
    it("create a job listing for for a maximum 10 jobs", async () => {
      const $store = createStore();
      const $route = createRoutes();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const jobListings = wrapper.findAll("[data-test='job-listing']");
      expect(jobListings).toHaveLength(10);
    });
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const $store = createStore();
      const $route = createRoutes({ page: undefined });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });
  describe("when query prams include page number", () => {
    it("display page number", () => {
      const $store = createStore();
      const $route = createRoutes({ page: "2" });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 2");
    });
  });
  describe("when user is on first page job result", () => {
    it("does no show link to previous page", () => {
      const $store = createStore();
      const $route = createRoutes({ page: "1" });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const preButton = wrapper.find("[data-test='previous-button']");
      expect(preButton.exists()).toBe(false);
    });
    it("shows link to next page", async () => {
      const $store = createStore();
      const $route = createRoutes({ page: "1" });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-button']");

      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("when user is on last page job result", () => {
    it("shows link to previous page", () => {
      const $store = createStore();
      const $route = createRoutes({ page: "2" });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const preButton = wrapper.find("[data-test='previous-button']");
      expect(preButton.exists()).toBe(true);
    });
    it("does no show link to next page", async () => {
      const $store = createStore();
      const $route = createRoutes({ page: "2" });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-button']");
      expect(nextPage.exists()).toBe(false);
    });
  });
});
