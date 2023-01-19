import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";

describe("SubNav", () => {
  const createConfig = (routeName) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
      mocks: {
        $route: {
          name: routeName,
        },
      },
    },
  });
  it("when user is on job page", () => {
    const routName = "JobResults";
    const wrapper = mount(SubNav, createConfig(routName));
    const jobCount = wrapper.find("[data-test='job-count']");
    expect(jobCount.exists()).toBe(true);
  });
  it("when user is not on job page", () => {
    const routName = "Home";
    const wrapper = mount(SubNav, createConfig(routName));
    const jobCount = wrapper.find("[data-test='job-count']");
    expect(jobCount.exists()).toBe(false);
  });
});
