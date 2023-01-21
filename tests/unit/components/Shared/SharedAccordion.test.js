import { mount } from "@vue/test-utils";

import SharedAccordion from "@/components/Shared/SharedAccordion";
describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    props: {
      header: "header test",
    },
    slots: {
      default: "<h1>slot test</h1>",
    },
    global: {
      stubs: {
        "font-awesome-icon": true,
      },
    },
    ...config,
  });
  it("renders child", async () => {
    const wrapper = mount(SharedAccordion, createConfig());
    expect(wrapper.text()).not.toMatch("slot test");
    const clickableArea = wrapper.find(
      "[data-test='accordion-clickable-area']"
    );
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("slot test");
  });
  describe("when we do not provide custom child (slot) content", () => {
    it("renders default content", async () => {
      const config = createConfig({
        slots: {},
      });
      const wrapper = mount(SharedAccordion, config);
      const clickableArea = wrapper.find(
        "[data-test='accordion-clickable-area']"
      );
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("Whoops, somebody forgot to populate me!");
    });
  });
});
