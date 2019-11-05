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

export async function createMarker(post) {
  var new_marker = "";
  const location = get(post, "node.location.name");
  console.log("Location image : ", location);
  if (location) {
    getCoordinates(location).then(coord => {
      if (coord && coord.latitude && coord.longitude) {
        new_marker = `<Marker key=${post.node.id} coordinate={"latitude":${coord.latitude}, "longitude":${coord.longitude}} />`;
        console.log("New marker : ", new_marker);
        return new_marker;
      } else return "";
    });
  } else return "";
}

export async function createMarkers(data) {
  const markers_list = [];

  requests = data.map(post => {
    new_marker = createMarker(post);
    Promise.resolve(new_marker).then(() => {
      console.log("Creation de marker");
      markers_list.push(new_marker);
      console.log("Marker pushe");
    });
  });
  Promise.all(requests).then(() => {
    console.log("Before return : ", markers_list);
    return markers_list;
  });
}
