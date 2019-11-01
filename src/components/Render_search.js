import React from 'react';
import {FlatList} from 'react-native';
import Pic_insta from './Pic_insta';
import get from 'lodash/get';

class Render_search extends React.Component {
    shouldComponentUpdate(){
        return true;
    }
    render() {
        const data = get(this.props.user_tl,"graphql.user.edge_owner_to_timeline_media.edges");
        if(!data)
            return null;
        console.log("RENDER");
        console.log("Donnees ", this.props.user_tl.graphql.user.edge_owner_to_timeline_media.edges);
        return (
            <FlatList
                data={data}
                keyExtractor={(item) => item.node.id.toString()}
                renderItem={({item}) => <Pic_insta post={item}/>
            }
            />
        )
    }
}
export default Render_search
/*recherche.graphql.location.edge_location_to_media.edges*/