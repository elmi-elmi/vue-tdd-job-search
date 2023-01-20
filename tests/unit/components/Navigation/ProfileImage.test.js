import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/Navigation/ProfileImage";

describe("ProfileImage", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage);

    const profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });
});
