import React from 'react';
import {FooterTab, Footer, Icon, Text, Button} from 'native-base';

class Footer_app extends React.Component {
    screen_actuel = this.props.screen;
    render() {
        return (
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
        );
    }
};

export default Footer_app;