import React from 'react';
import {StyleSheet, Button, TextInput, View } from 'react-native';


class Search extends React.Component {
    render() {
        return (
            <View style={styles.conteneur}>
                <TextInput style={styles.text_input} placeholder='Votre @ instagram'/>
                <Button style={styles.button} title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text_input: {
        flexDirection: 'row',
        flex: 5,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        
    },

    conteneur: {
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
