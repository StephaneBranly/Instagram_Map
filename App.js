import React from 'react';
import Search from './src/components/Search';
import {Root, FooterTab, Footer, Icon, Text, Button} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

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
  this.setState({screen:"timeline"});
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
          <Footer>
                <FooterTab>
                  <Button vertical onPress={this.change_screen_map}>
                    <Icon name="ios-map"/>
                    <Text>Map</Text>
                  </Button>
                  <Button vertical active>
                    <Icon name="ios-images" />
                    <Text>Timeline</Text>
                  </Button>
                  <Button vertical>
                    <Icon active name="ios-information-circle" />
                    <Text>A propos</Text>
                  </Button>
                </FooterTab>
              </Footer>
        </Root>
        );
    case 'map':
        return(
          <Root>
            <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>Text view</Text>
            <Footer>
                  <FooterTab>
                    <Button vertical active >
                      <Icon name="ios-map" />
                      <Text>Map</Text>
                    </Button>
                    <Button vertical onPress={this.change_screen_timeline}>
                      <Icon name="ios-images" />
                      <Text>Timeline</Text>
                    </Button>
                    <Button vertical>
                      <Icon active name="ios-information-circle" />
                      <Text>A propos</Text>
                    </Button>
                  </FooterTab>
                </Footer>
          </Root>
          );
        default:
          return null;
        
  }

}
}