import { getCharacters } from "./api";

export async function getCharactersByNameOrGender({ gender, name }) {
  const characters = await getCharacters();

  const filteredCharacters = characters.filter((character) => {
    if (gender) {
      return character.gender.toLowerCase() === gender.toLowerCase();
    }

    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  return filteredCharacters;
}
