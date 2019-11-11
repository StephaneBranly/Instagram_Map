import React from "react";
//import { TOKEN } from "../../config/api_gps_token";
import get from "lodash/get";

export async function getCoordinates(location_id) {
  //const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${TOKEN}`;
  const url = `https://www.instagram.com/graphql/query/?query_hash=ac38b90f0f3981c42092016a37c59bf7&variables={"id":${location_id},"first":12,"after":null}`;
  content = [];
  if (location_id === "undefined") return null;
  try {
    const response = await fetch(url);

    content = await response.json();
    const donnees = get(content, "data.location");
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
