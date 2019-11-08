/* Data get information */
export async function getDataTLFromId(text, city = false) {
  const substring = city ? `explore/locations/${text}` : text;
  const url = `https://www.instagram.com/${substring}/?__a=1`;
  try {
    const response = await fetch(url);
    if (
      response &&
      response.url &&
      (response.url.includes("accounts/login") || response.url.includes("<"))
    ) {
      return { unavailable: true };
    }

    try {
      const objet_json = await response.json();
      return objet_json;
    } catch (e) {
      return { unavailable: true };
    }
  } catch (error) {
    return { unavailable: true };
  }
}
