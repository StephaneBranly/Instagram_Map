import React from "react";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import get from "lodash/get";
import { Card, CardItem, Text, Icon, Container } from "native-base";
import { NotFindUserCard, PrivateUserCard, ResumeUserCard } from "./User_cards";
import { createMarkers } from "../libs/getInformations";

class Render_search_map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      isLoading: false
    };
  }

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
      //TODO : remonter la création de markers à App.js pour éviter de devoir recharger à chaque changement d'écran
      //TODO : ajouter la possibilité d'enregistrer la vue actuelle
      let markers = {};
      posts_to_map = [];
      for (const post of data_user_tl) {
        if (post.coord !== null) {
          posts_to_map.push(post);
        }
      }
      console.log("Posts a map", posts_to_map);
      markers = posts_to_map.map(post => (
        <MapView.Marker
          key={post.key}
          pinColor="green"
          title={post.location}
          description="Ici il faut mettre une description du pin"
          coordinate={post.coord}
        >
          <Image
            source={{ uri: post.image }}
            style={{ height: 100, width: 100 }}
          />
        </MapView.Marker>
      ));
      console.log(markers);
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 49.416604379904584,
            longitude: 2.8224315202378047,
            latitudeDelta: 0.02922,
            longitudeDelta: 0.02421
          }}
        >
          <Marker
            pinColor="green"
            title="My first pin"
            description="Ici il faut mettre une description du pin"
            //image={data_user.profile_pic_url_hd} WORKS
            coordinate={{
              latitude: 49.416604379904584,
              longitude: 2.8224315202378047
            }}
          />
          {markers}
        </MapView>
      );
    }
  }
}
export default Render_search_map;
