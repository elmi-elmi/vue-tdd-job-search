import getJobs from "@/api/getJobs";
import axios from "axios";
jest.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
  });
  it("get request to correct url", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.test.com/jobs");
  });
});
