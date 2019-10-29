export function getCityTLFromId (text) {
    const url = 'https://www.instagram.com/explore/locations/'+text+'/?__a=1'
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}