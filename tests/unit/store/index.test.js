import { state, mutations, actions, RECEIVE_JOBS } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");
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
  it("RECEIVE_JOBS", () => {
    const startingState = state();
    const jobs = [{ id: 1, title: "test title" }];

    mutations.RECEIVE_JOBS(startingState, jobs);
    expect(startingState.jobs).toEqual(jobs);
  });
});
describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([{ id: 1, title: "action test" }]);
    });
    it("make request to getJobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });
    it("commit received data with RECEIVE_JOBS in mutations ", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(context.commit).toHaveBeenCalledWith(RECEIVE_JOBS, [
        { id: 1, title: "action test" },
      ]);
    });
  });
});
