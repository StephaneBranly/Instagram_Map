import React from 'react';
import {ActivityIndicator} from 'react-native';
import {catchUserTLFromId} from '../libs/catchTL';
import Render_search_timeline from './Render_search_timeline';
import Render_search_map from './Render_search_map';
import {Container, Header, Input, Item, Icon, Text} from 'native-base';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedText: "",
            user_tl: [],
            isLoading: false,
        };
        this.load_user();
    }
    
    load_user(){
        if (this.state.searchedText.length > 0){
        this.setState({ isLoading: true })
        catchUserTLFromId(this.state.searchedText).then(datas => {
            this.setState({user_tl:datas, isLoading: false});
        });
      }
    }
    _searchTextInputChanged(text) {
        this.setState({searchedText: text});
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <Container>
              <ActivityIndicator size='large' />
            </Container>
          )
        }
      }

    render() {
        const {view} = this.props;
        return (
            <Container>
                <Container>
                <Header searchBar rounded>
                  <Item>
                      <Icon onPress={() => this.load_user()} name="ios-search" />
                      <Input placeholder="Rechercher" onChangeText={(text) => this._searchTextInputChanged(text)}/>
                      <Icon name="ios-people" />
                  </Item>
                </Header>
                {view==='timeline' && <Render_search_timeline user_tl={this.state.user_tl}/>}
                {view==='map' && <Render_search_map user_tl={this.state.user_tl}/>}
                </Container>
                {this._displayLoading()}
            </Container>     
        )
    }
};
export default Search;
