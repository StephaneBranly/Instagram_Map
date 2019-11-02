import React from "react";
import { ActivityIndicator } from "react-native";
import Render_search_timeline from "./Render_search_timeline";
import Render_search_map from "./Render_search_map";
import { Container, Header, Input, Item, Icon, Text } from "native-base";
import get from "lodash/get";

class Search extends React.Component {
  constructor(props) {
    super(props);
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

  onChange = e => {
    e.preventDefault();
    const newText = get(e, "nativeEvent.text", "");
    const { searchTextInputChanged } = this.props;
    searchTextInputChanged(newText);
  };

  render() {
    const {
      load_user,
      screen,
      searchedText,
      searchFocus,
      user_tl
    } = this.props;

    return (
      <Container>
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon onPress={load_user} name="ios-search" />
              <Input
                placeholder="Rechercher"
                value={searchedText}
                onChange={this.onChange}
                autoFocus={searchFocus}
              />
              <Icon name="ios-people" />
            </Item>
          </Header>
          {screen === "timeline" && (
            <Render_search_timeline user_tl={user_tl} />
          )}
          {screen === "map" && <Render_search_map user_tl={user_tl} />}
        </Container>
        {this._displayLoading()}
      </Container>
    );
  }
}
export default Search;
