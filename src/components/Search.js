import React from "react";
import { ActivityIndicator } from "react-native";
import Render_search_timeline from "./Render_search_timeline";
import Render_search_map from "./Render_search_map";
import { Container, Header, Input, Item, Icon, Text } from "native-base";

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { load_user } = this.props;
    load_user();
  }

  _displayLoading() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <Container>
          <ActivityIndicator size="large" />
        </Container>
      );
    }
  }

  render() {
    const { view, _searchTextInputChanged, load_user, user_tl } = this.props;
    return (
      <Container>
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon onPress={() => load_user()} name="ios-search" />
              <Input
                placeholder="Rechercher"
                onChangeText={text => _searchTextInputChanged(text)}
              />
              <Icon name="ios-people" />
            </Item>
          </Header>
          {view === "timeline" && <Render_search_timeline user_tl={user_tl} />}
          {view === "map" && <Render_search_map user_tl={user_tl} />}
        </Container>
        {this._displayLoading()}
      </Container>
    );
  }
}
export default Search;
