import React from 'react';
import {Image} from 'react-native';
import get from 'lodash/get';
import {Card,Container,CardItem,Text,Icon,Left,Right} from 'native-base';

 
class Pic_insta extends React.Component {
    render() {
        const {node}=this.props.post;
        var location_name=get(node,"location.name");
        if(!location_name)
            location_name="non renseigné";
        return (
            <Card style={{flex:0}}>
                <CardItem cardBody><Image style={{height: 250, width: null, flex:1}}
                source={{uri: node.display_url}}/></CardItem>
                <CardItem footer>
                    <Left style={{flex:1}}><Text>{node.edge_liked_by.count} </Text><Icon name='heart'/></Left>
                    <Right style={{flex:4}}><Text>à {location_name}</Text></Right>
                </CardItem>
            </Card>
        );
    }
}

export default Pic_insta