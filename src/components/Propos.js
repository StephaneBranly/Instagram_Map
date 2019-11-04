import React from "react";
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
            <ListItem>
              <Icon name="ios-git-network" />
              <Text> Github du projet</Text>
            </ListItem>
            <ListItem>
              <Icon name="ios-gift" />
              <Text> Faire un don</Text>
            </ListItem>

            <Separator bordered>
              <Text>Contributeurs</Text>
            </Separator>
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Thumbnail
                  source={{
                    uri:
                      "https://avatars3.githubusercontent.com/u/51955833?s=460&v=4"
                  }}
                />
              </Left>
              <Body style={{ flex: 4 }}>
                <Text>StephaneBranly</Text>
                <Text note>Développeur</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Thumbnail
                  source={{
                    uri:
                      "https://avatars1.githubusercontent.com/u/25478895?s=460&v=4"
                  }}
                />
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
              <Text>lodash</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default Propos;
