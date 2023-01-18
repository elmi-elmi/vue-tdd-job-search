import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("[data-test='text-input']");
    input.setValue("Shahrokh");
    input.setValue("elmi");
    const message = wrapper.emitted()["update:modelValue"];
    expect(message).toEqual([["Shahrokh"], ["elmi"]]);
  });
});
