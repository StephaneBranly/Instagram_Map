import React from "react";
import { Card, CardItem, Icon, Text, Left, Thumbnail } from "native-base";

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
        <CardItem header>
          <Left>
            <Thumbnail square large source={{ uri: this.props.img }} />
            <Text>{this.props.name}</Text>
            <Text subtitle>({this.props.username})</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
