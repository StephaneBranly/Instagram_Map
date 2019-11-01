import React from 'react';
import {StyleSheet, Image, Text, View } from 'react-native';

 
class Pic_insta extends React.Component {
    render() {
        return (
            <View style={styles.conteneur}>
                <Text style={styles.text}>ID image : {this.props.post.node.id}</Text>
                <Image style={styles.image}  style={{width: this.props.post.node.dimensions.width, height: this.props.post.node.dimensions.height}}
                source={{uri: this.props.post.node.display_url}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        marginTop: 5,
    },

    conteneur: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        flexDirection: 'row',
        flex: 1,
        borderColor: 'rgb(0,0,0)',
        
    },
  });

export default Pic_insta
