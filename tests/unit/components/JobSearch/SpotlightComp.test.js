import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");
import SpotlightComp from "@/components/JobSearch/SpotlightComp";

describe("SpotlightComp", () => {
  const mockSpotlightsResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          title: "test title",
          img: "test img",
          description: "test description",
          ...data,
        },
      ],
    });
  };

  it("provides img attribute to parent component", async () => {
    mockSpotlightsResponse({ img: "test img" });
    const wrapper = mount(SpotlightComp, {
      slots: {
        default: `<template #default={img}>{{img}}</template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("test img");
  });

  it("provides title attribute to parent component", async () => {
    mockSpotlightsResponse({ title: "test title" });
    const wrapper = mount(SpotlightComp, {
      slots: {
        default: `<template #default={title}>{{title}}</template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("test title");
  });

  it("provides description attribute to parent component", async () => {
    mockSpotlightsResponse({ description: "test description" });

    const wrapper = mount(SpotlightComp, {
      slots: {
        default: `<template #default={description}>{{description}}</template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("test description");
  });
});
