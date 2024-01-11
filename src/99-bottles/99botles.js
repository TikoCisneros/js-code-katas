export class BeerSong {
  sing(from, to = 0) {
    const song = [];
    
    for (let i = from; i >= to; i--) {
      song.push(this.verse(i));
    }
    
    return song.join('\n');
  }

  verse(number) {
    if (number === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
    }

    if (number === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }

    return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`;
  }
}
