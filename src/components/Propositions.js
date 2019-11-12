import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { Card, CardItem, Thumbnail, Icon } from "native-base";
import get from "lodash/get";

export default class Propositions extends React.Component {
  render() {
    let propositions = null;
    propositions_check = get(this.props, "propositions");
    if (propositions_check !== null && this.props.focus) {
      propositions = this.props.propositions.map(post => (
        <TouchableHighlight
          key={post.user.pk}
          onPress={() => {
            this.props.changePlaceHolder(post.user.username);
          }}
        >
          <CardItem avatar key={post.user.pk}>
            <Thumbnail
              small
              style={{ marginRight: 5 }}
              source={{
                uri: post.user.profile_pic_url
              }}
            />
            {post.user.is_verified && (
              <Icon name="ios-checkmark-circle-outline" />
            )}
            {post.user.is_private && <Icon name="ios-eye-off" />}
            <Text>{post.user.username}</Text>
          </CardItem>
        </TouchableHighlight>
      ));
      return <Card>{propositions}</Card>;
    }
    return null;
  }
}
