import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";

describe("SubNav", () => {
  it("when user is on job page", () => {
    const wrapper = mount(SubNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return { onJobResultPage: true };
      },
    });
    const jobCount = wrapper.find("[data-test='job-count']");
    expect(jobCount.exists()).toBe(true);
  });
  it("when user is not on job page", () => {
    const wrapper = mount(SubNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return {
          onJobResultPage: false,
        };
      },
    });
    const jobCount = wrapper.find("[data-test='job-count']");
    expect(jobCount.exists()).toBe(false);
  });
});
