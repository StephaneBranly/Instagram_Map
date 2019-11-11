import React from "react";
import { ActivityIndicator, Text } from "react-native";
import Render_search_timeline from "./Render_search_timeline";
import Render_search_map from "./Render_search_map";
import Propositions from "./Propositions";
import { Container, Header, Input, Item, Icon } from "native-base";
import get from "lodash/get";
import { searchPropositions } from "../libs/searchPropositions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { propositions: [] };
  }

  onChange = e => {
    e.preventDefault();
    const newText = get(e, "nativeEvent.text", "");
    const { searchTextInputChanged } = this.props;
    searchTextInputChanged(newText);
    searchPropositions(newText).then(data => {
      this.setState({ propositions: data });
    });
  };

  changePlaceHolder = text => {
    this.props.searchTextInputChanged(text);
    this.setState({ propositions: [] });
  };

  render() {
    const {
      load_user,
      screen,
      searchFocus,
      user_tl,
      searchedText
    } = this.props;
    const { propositions } = this.state;

    const { isLoading } = this.props;

    return (
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
        {this.state.propositions !== [] && (
          <Propositions
            propositions={propositions}
            focus={searchFocus}
            changePlaceHolder={this.changePlaceHolder}
          />
        )}
        {!isLoading && screen === "timeline" && (
          <Render_search_timeline user_tl={user_tl} />
        )}
        {!isLoading && screen === "map" && (
          <Render_search_map user_tl={user_tl} />
        )}

        {isLoading && (
          <Container>
            <ActivityIndicator size="large" />
          </Container>
        )}
      </Container>
    );
  }
}
export default Search;
