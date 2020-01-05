import get from "lodash/get";

export async function keepUtils(data) {
  const objet_data = [];
  const data_parcours = get(data, "graphql.user");
  if (!data_parcours) return "user_unavailable";
  else {
    objet_data.user = {
      is_private: data_parcours.is_private,
      is_verified: data_parcours.is_verified,
      username: data_parcours.username,
      full_name: data_parcours.full_name,
      avatar: data_parcours.profile_pic_url_hd
    };
    if (data_parcours.is_private === false) {
      const data_user_tl = get(
        data,
        "graphql.user.edge_owner_to_timeline_media.edges"
      );
      const posts = [];
      for (const post of data_user_tl) {
        location_id = null;
        let location_name = get(post, "node.location.name");
        let coord;
        if (!location_name) {
          location_name = "unavaible";
        } else {
          location_id = get(post, "node.location.id");
          // coord = await getCoordinates(location_id);
          coord = {
            latitude: null,
            longitude: null
          };
        }
        if (!coord) coord = null;
        const new_post = {
          image: post.node.display_url,
          nb_likes: post.node.edge_liked_by.count,
          location: location_name,
          location_id: location_id,
          coord: coord,
          key: post.node.id
        };
        posts.push(new_post);
      }
      objet_data.posts = posts;
    }
  }
  return objet_data;
}
