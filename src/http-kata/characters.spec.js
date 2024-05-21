import { getCharactersByNameOrGender } from "./characters";
import * as api from "./api";
jest.mock("./api.js");

const API_RESULT_MOCK = [
  {
    id: 1,
    name: "Rick Sanchez",
    gender: "Male",
  },
  {
    id: 2,
    name: "Summer Smith",
    gender: "Female",
  },
];

describe("Characters functionality", () => {
  it("should filter characters by gender successfully", async () => {
    const output = [API_RESULT_MOCK[0]];
    jest.spyOn(api, "getCharacters").mockReturnValue(API_RESULT_MOCK);
    const result = await getCharactersByNameOrGender({ gender: "male" });
    expect(result).toEqual(output);
  });
  it("should filter characters by name successfully", async () => {
    const output = [API_RESULT_MOCK[0]];
    jest.spyOn(api, "getCharacters").mockReturnValue(API_RESULT_MOCK);
    const result = await getCharactersByNameOrGender({ name: "rick" });
    expect(result).toEqual(output);
  });
});
