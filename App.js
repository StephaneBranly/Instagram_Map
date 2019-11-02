import React from "react";
import Search from "./src/components/Search";
import { Root, FooterTab, Footer, Icon, Text, Button } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Footer_app from "./src/components/Footer";
import Propos from "./src/components/Propos";
// import { catchUserTLFromId } from "./src/libs/catchTL";
import datas from "./examples/data_user";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      screen: "",
      searchedText: "",
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
  }

  load_user = () => {
    if (this.state.searchedText.length > 0) {
      // this.setState({ isLoading: true });
      // catchUserTLFromId(this.state.searchedText).then(datas => {
      this.setState({ user_tl: datas, isLoading: false });
      // });
    }
  };
  searchTextInputChanged = text => {
    this.setState({ searchedText: text });
  };

  change_screen_timeline = () => {
    this.setState({ screen: "timeline" });
  };
  change_screen_map = () => {
    this.setState({ screen: "map" });
  };
  change_screen_propos = () => {
    this.setState({ screen: "propos" });
  };
  render() {
    const { isReady, screen } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    let Component;
    switch (screen) {
      case "timeline":
        Component = () => (
          <Search
            load_user={this.load_user}
            searchTextInputChanged={this.searchTextInputChanged}
            view="timeline"
            {...this.state}
          />
        );
        break;
      case "map":
        Component = () => (
          <Search
            load_user={this.load_user}
            searchTextInputChanged={this.searchTextInputChanged}
            view="map"
            {...this.state}
          />
        );
        break;
      case "propos":
        Component = () => <Propos />;
        break;
      default:
        return <AppLoading />;
    }

    return (
      <Root>
        <Component />
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
