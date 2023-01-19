import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });
  afterEach(() => {
    axios.get.mockReset();
  });

  const createRoutes = (query) => ({
    query: { page: "1", ...query },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: { $route },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("fetch jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const route = createRoutes({ page: "1" });
    shallowMount(JobListings, createConfig(route));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });
  it("create a job listing for for a maximum 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(35).fill({}) });
    const route = createRoutes({ page: "2" });
    const wrapper = shallowMount(JobListings, createConfig(route));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const route = createRoutes({ page: undefined });
      const wrapper = shallowMount(JobListings, createConfig(route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });
  describe("when query prams include page number", () => {
    it("display page number", () => {
      const route = createRoutes({ page: "2" });
      const wrapper = shallowMount(JobListings, createConfig(route));
      expect(wrapper.text()).toMatch("Page 2");
    });
  });
  describe("when user is on first page job result", () => {
    it("does no show link to previous page", () => {
      const route = createRoutes({ page: "1" });

      const wrapper = shallowMount(JobListings, createConfig(route));
      const preButton = wrapper.find("[data-test='previous-button']");
      expect(preButton.exists()).toBe(false);
    });
    it("shows link to next page", async () => {
      const route = createRoutes({ page: "1" });

      const wrapper = shallowMount(JobListings, createConfig(route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-button']");

      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("when user is on last page job result", () => {
    it("shows link to previous page", () => {
      const route = createRoutes({ page: "2" });

      const wrapper = shallowMount(JobListings, createConfig(route));
      const preButton = wrapper.find("[data-test='previous-button']");
      expect(preButton.exists()).toBe(true);
    });
    it("does no show link to next page", async () => {
      const route = createRoutes({ page: "2" });

      const wrapper = shallowMount(JobListings, createConfig(route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-button']");
      expect(nextPage.exists()).toBe(false);
    });
  });
});
