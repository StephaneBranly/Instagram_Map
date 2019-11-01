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
  };
}

async componentDidMount() {
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  this.setState({ isReady: true });
}

render() {
  if (!this.state.isReady) {
    return <AppLoading />;
  }

return(
  <Root>
    <Search style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></Search>
    <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-map" />
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
}
}