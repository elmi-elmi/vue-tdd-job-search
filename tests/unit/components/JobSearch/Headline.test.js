import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Headline from "@/components/JobSearch/Headline";

describe("Headline", () => {
  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action phrase in a consistent interval", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setInterval");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps action phrase after the first interval", async () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setInterval");
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const nextActionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(nextActionPhrase.text()).toBe("Create for everyone");
    jest.useRealTimers();
  });

  it("removes interval when components disappear", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "clearInterval");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
