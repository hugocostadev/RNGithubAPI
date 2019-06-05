import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet
} from "react-native";

import CardRepositorio from "../components/CardRepositorio";

import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Repos extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Input
          value={this.state.searchTerm}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          placeholder="Filtrar por nome"
          leftIcon={<Icon name="magnify" size={24} color="black" />}
        />

        <ReposList filtroString={this.state.searchTerm}/>
      </View>
    );
  }
}

class ReposList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositorios: [],
      erro: false
    };
  }

  getRepositorios = async (e) => {
    this.setState({ erro: false });
    try {
      const resposta = await fetch("https://api.github.com/repositories");
      const repos = await resposta.json();
      console.log("Resposta", resposta);
      console.log("JSON", repos);

      this.setState({ repositorios: repos, erro: false });
    } catch (e) {
      this.setState({ repositorios: [], erro: true });
      console.log("error: ", e);
      console.log(this.state.erro);
    }
  };

  componentDidMount() {
    this.getRepositorios();
  }

  _renderItem = ({ item }) => (
    <CardRepositorio
      nome={item.name}
      descricao={item.description}
      url={item.html_url}
    />
  );

  render() {
    // Atribui os repositorios guardados em state para variavel responsavel de popular a lista
    let filteredRepos = this.state.repositorios;
    if (this.props.filtroString.length > 3) {
      filteredRepos = filteredRepos.filter(val => {
        return (
          val.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .indexOf(
              this.props.filtroString
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            ) !== -1
        );
      });
    }


    if (this.state.repositorios.length === 0 && !this.state.erro) {
      return (
        <View style={styles.Loader}>
          <ActivityIndicator size="large" color="#f05a1a" />
        </View>
      );
    } else if (this.state.erro) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30}}>
          <Text style={{marginBottom: 30, textAlign: 'center'}}>
            Algo inesperado aconteceu. Verifique sua conexão com a Internet e
            tente novamente!
          </Text>
          <Button
            onPress={() => this.getRepositorios()}
            title="Recarregar"
            color="#f05a1a"
          />
        </View>
      );
    } else if (filteredRepos.length == 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30}}>
          <Icon name="emoticon-sad" size={60} color="#f05a1a" />
          <Text style={{marginTop:20}}>Nenhum repositório foi encontrado</Text>
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={filteredRepos}
          keyExtractor={(repo, index) => repo.id.toString()}
          renderItem={this._renderItem}
        />
      </View>
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
