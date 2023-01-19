import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing";
describe("JobListing", () => {
  const createProps = (props = {}) => ({
    job: {
      id: "1",
      title: "frontend",
      organization: "bobo",
      locations: ["shiraz", "tehran"],
      minimumQualifications: ["code", "develop"],
      ...props,
    },
  });
  const createConfig = (props) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    props,
  });
  it("renders title", () => {
    const title = "test title";
    const props = createProps({ title });
    const wrapper = mount(JobListing, createConfig(props));
    expect(wrapper.text()).toMatch(title);
  });
  it("renders organization", () => {
    const organization = "test organization";
    const props = createProps({ organization });
    const wrapper = mount(JobListing, createConfig(props));
    expect(wrapper.text()).toMatch(organization);
  });
  it("renders locations", () => {
    const locations = ["test location 1", "test location 2"];
    const props = createProps({ locations });
    const wrapper = mount(JobListing, createConfig(props));

    expect(wrapper.text()).toMatch(locations[0]);
    expect(wrapper.text()).toMatch(locations[1]);
  });
  it("renders minimumQualifications", () => {
    const minimumQualifications = [
      "test qualification 1",
      "test qualification 2",
    ];
    const props = createProps({ minimumQualifications });
    const wrapper = mount(JobListing, createConfig(props));

    expect(wrapper.text()).toMatch(minimumQualifications[0]);
    expect(wrapper.text()).toMatch(minimumQualifications[1]);
  });
  it("links to the individual job's page", () => {
    const id = 1;
    const props = createProps({ id });
    const wrapper = mount(JobListing, createConfig(props));
    const router = wrapper.findComponent(RouterLinkStub);
    const toProp = router.props("to");
    expect(toProp).toBe("/job/results/1");
  });
});
