/* Data get information */
export async function getDataTLFromId(text, city = false) {
  const substring = city ? `explore/locations/${text}` : text;
  const url = `https://www.instagram.com/${substring}/?__a=1`;
  try {
    const response = await fetch(url);
    if (response && response.url && response.url.includes("accounts/login")) {
      return { unavailable: true };
    }

    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}
