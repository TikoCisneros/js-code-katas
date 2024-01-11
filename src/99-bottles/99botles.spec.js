import { BeerSong } from "./99botles";

describe("99 bottles", () => {
  it("should print an arbitrary verse", () => {
    const expected =
      "8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n";
    const beerSong = new BeerSong();
    
    const verse = beerSong.verse(8)

    expect(verse).toBe(expected)
  });

  it("should print other arbitrary verse", () => {
    const expected =
      "28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n";
    const beerSong = new BeerSong();
    
    const verse = beerSong.verse(28)

    expect(verse).toBe(expected)
  });
});