import React from 'react';
import Pic_insta from './Pic_insta';
import get from 'lodash/get';
import {Card, CardItem, Container, Left, Right, Text, Icon, Body, Thumbnail, Subtitle} from 'native-base';

class Render_search_timeline extends React.Component {
    render() {
        const data_user = get(this.props.user_tl,"graphql.user");
        const data_user_tl = get(this.props.user_tl,"graphql.user.edge_owner_to_timeline_media.edges");
        if(!data_user || !data_user_tl)
        {
            return (
                <Card style={{flex:0}}>
                    <CardItem header><Icon name='ios-warning'/><Text>Ce compte n'existe pas...</Text></CardItem>
                </Card>
            );
        }
            
        if(data_user.is_private==true)
        {
            return (
                <Card style={{flex:0}}>
                    <CardItem header><Icon name='ios-eye-off'/><Text>Ce compte est en mode privé...</Text></CardItem>
                </Card>
            );
        }
        return (
            <Container>
                <Card style={{flex:0}}>
                    <CardItem header>
                        <Left>
                            <Thumbnail square large source={{uri:data_user.profile_pic_url_hd}}/>
                            <Text>{data_user.full_name}</Text>
                            <Text>({data_user.username})</Text>
                        </Left>
                    </CardItem>
                </Card>
                <Card
                dataArray={data_user_tl}
                renderRow={({item}) => <Pic_insta post={item}/>}   
                ></Card>
            </Container>
        )
    }
};
export default Render_search_timeline;