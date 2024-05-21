import { getCharacters } from "./api";

const API_RESULT_MOCK = {
  results: [
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
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(API_RESULT_MOCK),
  })
);

describe("Api tests", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should fetch characters successfully", () => {
    const output = API_RESULT_MOCK.results;
    getCharacters().then((result) => {
      expect(fetch).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character"
      );
      expect(result).toEqual(output);
    });
  });

  it("should return Network error", () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    getCharacters().catch((error) =>
      expect(error.message).toBe("Network response was not ok")
    );
  });
});
