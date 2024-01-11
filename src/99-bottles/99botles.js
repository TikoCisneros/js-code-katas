export class BeerSong {
  sing(from, to = 0) {
    return this.#generateRange(from, to).map(this.verse).join("\n");
  }

  verse(number) {
    if (number === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
    }

    if (number === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }

    return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} ${number === 2 ? 'bottle' : 'bottles'} of beer on the wall.\n`;
  }

  /**
   * Aprovecha el método Array.from() para generar el array de rango descendente. 
   * Crea un array con una longitud igual a la diferencia absoluta entre end y start, más uno. 
   * El segundo argumento de Array.from() es una función de mapeo que toma el índice i. 
   * Utiliza un operador condicional (operador ternario) para verificar si start es mayor que end. Si es así, 
   * resta i de start para calcular el valor correspondiente para cada elemento en el rango. De lo contrario, suma i a start.
   */
  #generateRange(start, end) {
    return Array.from({ length: Math.abs(end - start) + 1 }, (_, i) => start > end ? start - i : start + i);
  }
}
