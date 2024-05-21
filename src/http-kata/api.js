export async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  // Check if the request was successful
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // Parse the response as JSON
  const apiResult = await response.json();

  return apiResult.results;
}
