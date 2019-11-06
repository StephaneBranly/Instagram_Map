import React from "react";
import { TouchableHighlight, Linking } from "react-native";
import { Card, CardItem, Icon, Text, Left, Thumbnail } from "native-base";

//TODO : afficher une petite icone quand l'user est certifié
export class NotFindUserCard extends React.Component {
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem header>
          <Icon name="ios-warning" />
          <Text>Ce compte n'existe pas...</Text>
        </CardItem>
      </Card>
    );
  }
}

export class PrivateUserCard extends React.Component {
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem header>
          <Icon name="ios-eye-off" />
          <Text>Ce compte est en mode privé...</Text>
        </CardItem>
      </Card>
    );
  }
}

export class ResumeUserCard extends React.Component {
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL(
              `https://www.instagram.com/${this.props.username}/`
            );
          }}
        >
          <CardItem header>
            <Left>
              <TouchableHighlight
                onPress={() => {
                  Linking.openURL(this.props.img);
                }}
              >
                <Thumbnail square large source={{ uri: this.props.img }} />
              </TouchableHighlight>
              <Text>{this.props.name}</Text>
              <Text subtitle>({this.props.username})</Text>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}
