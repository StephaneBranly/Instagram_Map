import React from 'react';
import Search from './src/components/Search';
import {Root, FooterTab, Footer, Icon, Text, Button} from 'native-base';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import Footer_app from './src/components/Footer';
import Propos from './src/components/Propos';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      screen: ""
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    this.setState({screen:"propos"});
  }

  change_screen_timeline = () => {
    this.setState({screen: "timeline"});
  }
  change_screen_map = () => {
    this.setState({screen: "map"});
  }
  change_screen_propos(){
    this.setState({screen: "propos"});
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
  switch(this.state.screen){
    case 'timeline':
        return(
          <Root>
            <Search style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></Search>
            <Footer_app screen='timeline'/>
          </Root>
          );
    case 'map':
        return(
          <Root>
            <Render_search_map/>
            <Footer_app screen='map'/>
          </Root>
          );
    case 'propos':
          return(
          <Root>
            <Propos/>
            <Footer_app screen='propos'/>
          </Root>
          );
    default:
      return <AppLoading />;   
    }
  }
}

/* Rebuild du bundle*/ 