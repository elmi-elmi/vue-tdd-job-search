import { state, mutations } from "@/store";

describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
});
describe("mutation", () => {
  it("LOGIN_USER", () => {
    const state = { isLoggedIn: false };
    mutations.LOGIN_USER(state);
    expect(state.isLoggedIn).toBe(true);
  });
});
