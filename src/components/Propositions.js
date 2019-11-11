import React from "react";
import { ActivityIndicator, Text } from "react-native";
import {
  Container,
  Header,
  Input,
  Item,
  Icon,
  List,
  ListItem,
  Avatar,
  Left,
  Body,
  Thumbnail
} from "native-base";
import { searchPropositions } from "../libs/searchPropositions";

export default class Propositions extends React.Component {
  render() {
    let propositions = null;
    if (this.props.propositions !== null || this.props.focus) {
      propositions = this.props.propositions.map(post => (
        <ListItem avatar key={post.user.pk}>
          <Left>
            <Thumbnail
              source={{
                uri: post.user.profile_pic_url
              }}
            />
          </Left>
          <Body>
            <Text>{post.user.username}</Text>
          </Body>
        </ListItem>
      ));
    }
    return <List>{propositions}</List>;
  }
}
