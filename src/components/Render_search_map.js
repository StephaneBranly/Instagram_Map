import React from "react";
import { Image } from "react-native";
import MapView from "react-native-maps";
import get from "lodash/get";
import { Container } from "native-base";
import { NotFindUserCard, PrivateUserCard, ResumeUserCard } from "./User_cards";

class Render_search_map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      isLoading: false
    };
  }

  // takeSnapshot = () => {
  //   const snapshot = this.map.takeSnapshot({
  //     format: "png", // image formats: 'png', 'jpg' (default: 'png')
  //     quality: 0.8, // image quality: 0..1 (only relevant for jpg, default: 1)
  //     result: "file" // result types: 'file', 'base64' (default: 'file')
  //   });
  //   snapshot.then(uri => {
  //     console.log(uri);
  //   });
  // };

  render() {
    const { user_tl } = this.props;

    const data_user_tl = get(user_tl, "posts");
    if (user_tl === "user_unavaible" || !get(user_tl, "user")) {
      return <NotFindUserCard />;
    } else if (user_tl.user.is_private === true) {
      return (
        <Container>
          <ResumeUserCard
            name={user_tl.user.full_name}
            username={user_tl.user.username}
            img={user_tl.user.avatar}
          />
          <PrivateUserCard />
        </Container>
      );
    } else {
      //TODO : ajouter la possibilité d'enregistrer la vue actuelle
      let markers = {};
      let markersShow = {};
      posts_to_map = [];
      let compteur = 0;
      let lat_min = 0;
      let lat_max = 0;
      let lon_min = 0;
      let lon_max = 0;
      let lat_moy = 0;
      let lon_moy = 0;
      let lat_del = 0;
      let lon_del = 0;
      for (const post of data_user_tl) {
        if (
          post.coord !== null &&
          post.coord.longitude !== null &&
          post.coord.latitude !== null
        ) {
          posts_to_map.push(post);
          compteur += 1;
          if (compteur === 1) {
            lat_max = post.coord.latitude;
            lat_min = lat_max;
            lon_max = post.coord.longitude;
            lon_min = lon_max;
          }
          if (post.coord.latitude < lat_min) lat_min = post.coord.latitude;
          if (post.coord.latitude > lat_max) lat_max = post.coord.latitude;
          if (post.coord.longitude < lon_min) lon_min = post.coord.longitude;
          if (post.coord.longitude > lon_max) lon_max = post.coord.longitude;
          lat_moy += post.coord.latitude;
          lon_moy += post.coord.longitude;
        }
      }

      if (compteur > 0) {
        lat_moy = lat_moy / compteur;
        lon_moy = lon_moy / compteur;
        lat_del = lat_max - lat_min + 0.01;
        lon_del = lon_max - lon_min + 0.01;
      } else {
        lat_moy = 49.416604379904584;
        lon_moy = 2.8224315202378047;
        lat_del = 0.00922;
        lon_del = 0.002421;
      }
      initialRegion = {
        latitude: lat_moy,
        longitude: lon_moy,
        latitudeDelta: lat_del,
        longitudeDelta: lon_del
      };

      markers = posts_to_map.map(post => (
        <MapView.Marker
          key={post.key}
          pinColor="green"
          title={post.location}
          // description="Ici il faut mettre une description du pin"
          coordinate={post.coord}
        >
          <Image
            source={{ uri: post.image }}
            style={{ height: 100, width: 100 }}
          />
        </MapView.Marker>
      ));
      markersShow = markers;

      return (
        <MapView
          // ref={map => {
          //   this.map = map;
          // }}
          style={{ flex: 1 }}
          initialRegion={initialRegion}
          // onLongPress={this.takeSnapshot}
        >
          {markersShow}
        </MapView>
      );
    }
  }
}
export default Render_search_map;
