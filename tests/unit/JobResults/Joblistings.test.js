import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  const createRoutes = (query) => ({
    query: { page: "1", ...query },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: { $route },
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
});
