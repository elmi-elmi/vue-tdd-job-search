import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h1>title slot test</h1>",
      },
    });
    expect(wrapper.text()).toMatch("title slot test");
  });
  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h1>subtitle slot test</h1>",
      },
    });
    expect(wrapper.text()).toMatch("subtitle slot test");
  });
});
