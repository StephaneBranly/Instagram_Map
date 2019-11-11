import get from "lodash/get";

export async function searchPropositions(query) {
  if (query === "") return null;
  const url = `https://www.instagram.com/web/search/topsearch/?context=blended&query=${query}`;
  content = [];
  try {
    const response = await fetch(url);
    content = await response.json();
    const donnees = get(content, "users");
    if (!donnees) return null;
    else {
      return donnees;
    }
  } catch (error) {
    return console.log("erreur");
  }
}
