import React from 'react';
import {FooterTab, Footer, Icon, Text, Button} from 'native-base';

class Footer_app extends React.Component {
    render() {
        const {screen,change_screen_timeline,change_screen_map,change_screen_propos} = this.props;
        return (
            <Footer>
            <FooterTab>
              <Button vertical active={screen==='map'} onPress={change_screen_map}>
                <Icon name="ios-map"/>
                <Text>Map</Text>
              </Button>
              <Button vertical active={screen==='timeline'} onPress={change_screen_timeline}>
                <Icon name="ios-images" />
                <Text>Timeline</Text>
              </Button>
              <Button vertical active={screen==='propos'} onPress={change_screen_propos}>
                <Icon active name="ios-information-circle" />
                <Text>A propos</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
    }
};

export default Footer_app;