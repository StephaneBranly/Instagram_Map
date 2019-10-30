export async function getCityTLFromId (text) {
    const url = 'https://www.instagram.com/explore/locations/'+text+'/?__a=1';
    console.log(url);
    try {
    const response = await fetch(url);
    console.log(await response.json());
    return await response.json();
  }
  catch (error) {
    return console.error(error);
  }
}