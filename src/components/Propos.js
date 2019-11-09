import React from "react";
import { Linking, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
  Icon,
  Text,
  List,
  ListItem,
  Separator,
  Left,
  Body,
  Thumbnail
} from "native-base";

class Propos extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <Separator bordered>
              <Text>L'application</Text>
            </Separator>
            <ListItem>
              <Text>Date de création : 27/10/2019</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(
                  `https://github.com/StephaneBranly/Instagram_Map`
                );
              }}
            >
              <Icon name="ios-git-network" />
              <Text> Github du projet</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(
                  `https://paypal.me/StephaneBranly?locale.x=fr_FR`
                );
              }}
            >
              <Icon name="ios-gift" />
              <Text> Faire un don</Text>
            </ListItem>

            <Separator bordered>
              <Text>Contributeurs</Text>
            </Separator>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(`https://github.com/StephaneBranly`);
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableHighlight
                  onPress={() => {
                    Linking.openURL(
                      `https://avatars3.githubusercontent.com/u/51955833?s=460&v=4`
                    );
                  }}
                >
                  <Thumbnail
                    source={{
                      uri:
                        "https://avatars3.githubusercontent.com/u/51955833?s=460&v=4"
                    }}
                  />
                </TouchableHighlight>
              </Left>
              <Body style={{ flex: 4 }}>
                <Text>StephaneBranly</Text>
                <Text note>Développeur</Text>
              </Body>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(`https://github.com/sebranly`);
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableHighlight
                  onPress={() => {
                    Linking.openURL(
                      `https://avatars1.githubusercontent.com/u/25478895?s=460&v=4`
                    );
                  }}
                >
                  <Thumbnail
                    source={{
                      uri:
                        "https://avatars1.githubusercontent.com/u/25478895?s=460&v=4"
                    }}
                  />
                </TouchableHighlight>
              </Left>
              <Body style={{ flex: 4 }}>
                <Text>sebranly</Text>
                <Text note>Débugueur/Testeur</Text>
              </Body>
            </ListItem>

            <Separator bordered>
              <Text>Dépendences utilisées</Text>
            </Separator>
            <ListItem>
              <Text>react-native</Text>
            </ListItem>
            <ListItem>
              <Text>native-base</Text>
            </ListItem>
            <ListItem>
              <Text>react-native-map</Text>
            </ListItem>
            <ListItem>
              <Text>OpenCage Geocoding API</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default Propos;
