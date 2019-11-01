import React from 'react';
import {StyleSheet, Button, TextInput, View } from 'react-native';
import {catchUserTLFromId} from '../libs/catchTL';
import Render_search from './Render_search';
import data from '../../examples/data_user';


/**/ 
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: true, user_tl: []};
    }

    load_user(){
        const id=this.state.toggle ? "stephane_branly" : "sebiandfaithy"
        catchUserTLFromId(id).then(datas => {
            this.setState({user_tl:datas, toggle: !this.state.toggle});
        });

    }

    render() {
        console.log('1');
        return (
            <View>
                <View style={styles.conteneur}>
                    <TextInput style={styles.text_input} placeholder='@username'/>
                    <Button style={styles.button} title='Rechercher' onPress={() => this.load_user()}/>
                </View>
                <Render_search user_tl={this.state.user_tl}/>
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
