import React from "react";
import { Image, Linking, TouchableHighlight } from "react-native";
import get from "lodash/get";
import { Card, CardItem, Text, Icon, Left, Right } from "native-base";

//TODO : afficher lorsqu'il y a plusieurs images sur un même post
//TODO : voir pour afficher les vidéos
//TODO : retirer la location quand elle n'est pas indiquée dans le post
//TODO : afficher les images avec les bonnes proportions
class Pic_insta extends React.Component {
  render() {
    const { post } = this.props;
    var location_name = get(post, "location");
    let location = null;
    if (location_name !== "unavaible")
      location = <Text>à {location_name}</Text>;
    return (
      <Card style={{ flex: 0 }}>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL(post.image);
          }}
        >
          <CardItem cardBody>
            <Image
              style={{ height: 250, width: null, flex: 1 }}
              source={{ uri: post.image }}
            />
          </CardItem>
        </TouchableHighlight>
        <CardItem footer>
          <Left style={{ flex: 1 }}>
            <Text>{post.nb_likes} </Text>
            <Icon name="heart" />
          </Left>
          <Right style={{ flex: 4 }}>{location}</Right>
        </CardItem>
      </Card>
    );
  }
}
export default Pic_insta;
