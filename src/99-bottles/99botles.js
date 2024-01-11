export class BeerSong {
  verse(number) {
    if (number === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }

    return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`;
  }
}
