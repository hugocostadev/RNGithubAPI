import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CardRepositorio from "../components/CardRepositorio";

export default class Repos extends Component {
  constructor() {
    super();
    this.state = {
      searchString: ""
    };
  }

  render() {
    return (
      <View>
        <Input
          onChangeText={searchString => this.setState({ searchString })}
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="magnify" size={24} color="black" />}
        />

        <ReposList searchString={this.state.searchString} />
      </View>
    );
  }
}

class ReposList extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    };

    
    if(this.props.searchString){
        console.log(this.props.searchString.split().length > 3);
        if (this.props.searchString.split().length > 3) {
          getRepositorios(this.props.searchString);
        }

    }
  }

  getRepositorios(searchTerm) {
    this._get(
      `https://api.github.com/search/repositories?q="${searchTerm}"`
    ).then(data => {
      console.log(data);

      this.setState({ repositorios: data });
    });
  }

  _get = async endpoint => {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.items;
  };

  _renderItem = ({ item }) => <CardRepositorio nome={item.name} />;

  render() {
    if (this.state.repositorios.length === 0) {
      return (
        <View style={styles.Loader}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    }
    return (
      <FlatList
        style={{}}
        data={this.state.repositorios}
        keyExtractor={(repo, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  Loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
