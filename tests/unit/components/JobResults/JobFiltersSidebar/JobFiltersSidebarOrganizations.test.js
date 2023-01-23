import { mount } from "@vue/test-utils";
import JobFiltersSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization";

describe("JobFiltersSidebarOrganization", () => {
  it("renders unique list of organizations for filtering jobs", async () => {
    const $store = {
      getters: { UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]) },
    };
    const wrapper = mount(JobFiltersSidebarOrganization, {
      global: {
        mocks: { $store },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    const clickableArea = wrapper.find(
      "[data-test='accordion-clickable-area']"
    );
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll(
      "[data-test='organization-label']"
    );
    const organization = organizationLabels.map((node) => node.text());
    expect(organization).toEqual(["Google", "Amazon"]);
  });
});
