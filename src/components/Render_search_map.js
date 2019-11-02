import React from "react";
import MapView from "react-native-maps";
import get from "lodash/get";
import { Card, CardItem, Container, Text, Icon } from "native-base";

class Render_search_map extends React.Component {
  render() {
    const data_user = get(this.props.user_tl, "graphql.user");
    const data_user_tl = get(
      this.props.user_tl,
      "graphql.user.edge_owner_to_timeline_media.edges"
    );
    if (!data_user || !data_user_tl) {
      return (
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Icon name="ios-warning" />
            <Text>Ce compte n'existe pas...</Text>
          </CardItem>
        </Card>
      );
    }

    if (data_user.is_private == true) {
      return (
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Icon name="ios-eye-off" />
            <Text>Ce compte est en mode privé...</Text>
          </CardItem>
        </Card>
      );
    }
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}
export default Render_search_map;
