import React from "react";
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

    const isUnavailable = get(user_tl, "unavailable", false);
    const data_user = get(user_tl, "graphql.user");
    const data_user_tl = get(
      this.props.user_tl,
      "graphql.user.edge_owner_to_timeline_media.edges"
    );
    if (!data_user || !data_user_tl || isUnavailable) {
      return <NotFindUserCard />;
    }
    if (data_user.is_private == true) {
      return (
        <Container>
          <ResumeUserCard
            name={data_user.full_name}
            username={data_user.username}
            img={data_user.profile_pic_url_hd}
          />
          <PrivateUserCard />
        </Container>
      );
    }

    // if (this.state.isLoading === false) {
    //   this.setState({ isLoading: true });
    //   console.log("Chargement des markeurs");
    //   results = createMarkers(data_user_tl);

    //   this.setState({ markers: results });
    //   console.log("Fin de chargement des markeurs");
    //   console.log("Resultat :", this.state.markers);
    // }

    //TODO : remonter la création de markers à App.js pour éviter de devoir recharger à chaque changement d'écran
    //TODO : ajouter la possibilité d'enregistrer la vue actuelle
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
      </MapView>
    );
  }
}
export default Render_search_map;
