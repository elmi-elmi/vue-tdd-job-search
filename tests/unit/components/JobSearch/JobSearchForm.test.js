import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("when user submit form", () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            "font-awesome-icon": true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      const locationInput = wrapper.find("[data-test='location-input']");
      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await roleInput.setValue("front");
      await locationInput.setValue("shiraz");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "front", location: "shiraz" },
      });
    });
  });
});
