import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and return the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const element = "C";
    const nextElement = nextElementInList(list, element);
    expect(nextElement).toBe("D");
  });
  it("locates next element at start of the list", () => {
    const list = ["A", "B", "C", "D", "C"];
    const element = "E";
    const nextElement = nextElementInList(list, element);
    expect(nextElement).toBe("A");
  });
});
