import { getCharacters } from "./api";

export async function getCharactersByNameOrGender({ gender, name }) {
  const characters = await getCharacters();

  const filteredCharacters = characters.filter((character) => {
    const matchesGender = gender
      ? character.gender.toLowerCase() === gender.toLowerCase()
      : true;
    const matchesName = name
      ? character.name.toLowerCase().includes(name.toLowerCase())
      : true;
    return matchesGender && matchesName;
  });

  return filteredCharacters;
}
