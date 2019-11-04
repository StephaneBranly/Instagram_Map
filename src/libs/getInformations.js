import { TOKEN } from "../../config/api_gps_token";
import get from "lodash/get";
import { Marker } from "react-native-maps";

export async function getCoordinates(city) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${TOKEN}`;
  content = [];
  if (city === "undefined") return null;
  try {
    const response = await fetch(url);

    content = await response.json();
    const donnees = get(content, "results.[0].geometry");
    if (!donnees) return null;
    else
      return {
        latitude: donnees.lat,
        longitude: donnees.lng
      };
  } catch (error) {
    return console.log("erreur");
  }
}

export function createMarkers(data) {
  const markers_liste = [];
  data.map(post => {
    const location = get(post, "node.location.name");
    console.log("Location image : ", location);
    if (location) {
      getCoordinates(location).then(coord => {
        console.log("Coord associées : ", coord);
      });
    }
    //   if (coord /* && coord.latitude && coord.longitude*/) {
    //     const new_marker = <Marker key={post.node.id} coordinate={coord} />;
    //     markers_liste.push(new_marker);
    //     markers_liste.push("Nouveau pin");
    //     console.log("Markeur ", markers_liste);
    //     console.log("New pin", coord);
    //   }
    // }
    else console.log("Il n'y a pas de location");
  });
  console.log("Before return : ", markers_liste);
  return markers_liste;
}
