import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";
import { expectedError } from "@babel/core/lib/errors/rewrite-stack-trace";

describe("action button", () => {
  const text = "action button text";
  it("renders the text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("applies one of several styles to button", () => {
    const type = "primary";
    const wrapper = mount(ActionButton, {
      props: {
        text,
        type,
      },
    });
    expect(wrapper.classes(type)).toBe(true);
  });
});
