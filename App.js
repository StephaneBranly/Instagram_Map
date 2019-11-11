import React from "react";
import Search from "./src/components/Search";
import { Root, FooterTab, Footer, Icon, Text, Button } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Footer_app from "./src/components/Footer";
import Propos from "./src/components/Propos";
import pick from "lodash/pick";
import { getDataTLFromId } from "./src/libs/getTL";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      screen: "",
      searchFocus: false,
      searchedText: "stephane_branly",
      user_tl: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    this.setState({ isReady: true, screen: "map" });
    this.load_user();
  }

  load_user = () => {
    const { searchedText } = this.state;

    if (searchedText.length > 0) {
      this.setState({ isLoading: true });
      getDataTLFromId(this.state.searchedText).then(datas => {
        this.setState({ user_tl: datas, isLoading: false });
      });
    }
  };

  searchTextInputChanged = text => {
    this.setState({ searchFocus: true, searchedText: text });
  };

  change_screen_timeline = () => {
    this.setState({ screen: "timeline", searchFocus: false });
  };

  change_screen_map = () => {
    this.setState({ screen: "map", searchFocus: false });
  };

  change_screen_propos = () => {
    this.setState({ screen: "propos", searchFocus: false });
  };

  render() {
    const { isReady, screen } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }

    const searchState = pick(this.state, [
      "isLoading",
      "screen",
      "searchFocus",
      "searchedText",
      "user_tl"
    ]);

    if (!["map", "propos", "timeline"].includes(screen)) {
      return <AppLoading />;
    }

    return (
      <Root>
        {screen === "propos" ? (
          <Propos />
        ) : (
          <Search
            load_user={this.load_user}
            searchTextInputChanged={this.searchTextInputChanged}
            {...searchState}
          />
        )}
        <Footer_app
          screen={screen}
          change_screen_timeline={this.change_screen_timeline}
          change_screen_map={this.change_screen_map}
          change_screen_propos={this.change_screen_propos}
        />
      </Root>
    );
  }
}
