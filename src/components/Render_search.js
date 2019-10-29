import React from 'react';
import {FlatList} from 'react-native';
import Pic_insta from './Pic_insta';
import recherche from '../../examples/data';

class Render_search extends React.Component {
    render() {
        return (
            <FlatList
                data={Object.values(recherche.graphql.location.edge_location_to_media.edges)}
                keyExtractor={(item) => item.node.id.toString()}
                renderItem={({item}) => <Pic_insta id={item.node.id} src={item.node.display_url}
       style={{width: 400, height: 400}} />
            }
            />
        )
    }
}
export default Render_search
