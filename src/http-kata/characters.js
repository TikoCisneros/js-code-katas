import { getCharacters } from "./api";

export async function getCharactersByNameOrGender({ gender }) {
  const characters = await getCharacters();

  const filteredCharacters = characters.filter(
    (character) => character.gender.toLowerCase() === gender.toLowerCase()
  );

  return filteredCharacters;
}
