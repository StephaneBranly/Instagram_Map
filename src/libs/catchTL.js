/* City catch informations */
export async function catchCityTLFromId(text) {
  const url = "https://www.instagram.com/explore/locations/" + text + "/?__a=1";
  console.log(url);
  try {
    const response = await fetch(url);
    console.log(await response.json());
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

/* User catch informations */
// export async function catchUserTLFromId(user) {
//   const url = `https://www.instagram.com/${user}/?__a=1`;
//   try {
//     const response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     return console.error(error);
//   }
// }
