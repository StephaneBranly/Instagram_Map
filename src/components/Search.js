import React from 'react';
import {StyleSheet, Button, TextInput, View } from 'react-native';
//import UseAnimations from 'react-useanimations';

/**/ 
class Search extends React.Component {
    _load_city(){
        catchCityTLFromId("212988663").then(data => console.log(data));
    }

    render() {
        return (
            <View style={styles.conteneur}>
                <TextInput style={styles.text_input} placeholder='Indiquez la ville'/>
                <Button style={styles.button} title='Rechercher' onPress={() => this._load_city()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text_input: {
        flexDirection: 'row',
        flex: 5,
        paddingLeft: 5,
    },

    conteneur: {
        marginTop: 35,
        flexDirection: 'row',
        flex: 0,
        backgroundColor: 'rgba(13,13,13,0.7)',
        alignItems: 'center',
    },

    button: {
        flexDirection: 'row',
        flex: 1,
    },
  });

export default Search
