import React from "react";
import { TOKEN } from "../../config/api_gps_token";
import get from "lodash/get";
import { Marker } from "react-native-maps";

//TODO : voir pour essayer de prendre les coordonnées à partir d'une page de la ville sur instagram
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

export async function createMarkers(data_user_tl) {
  let markers = {};
  posts_to_map = [];
  for (const post of data_user_tl) {
    if (post.coord !== null) {
      posts_to_map.push(post);
    }
  }
  markers = posts_to_map.map(post => (
    <MapView.Marker
      key={post.key}
      pinColor="green"
      title={post.location}
      // description="Ici il faut mettre une description du pin"
      coordinate={post.coord}
    >
      <Image source={{ uri: post.image }} style={{ height: 100, width: 100 }} />
    </MapView.Marker>
  ));
  return markers;
}
