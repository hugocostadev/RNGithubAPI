import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class CardRepositorio extends Component {
  render() {
    return (
      <View style={styles.Card} elevation={10}>
        <View style={styles.CardHeader}>
          <Text style={{color: 'black'}}>
            <Icon name="github-circle" size={20} color="black" /> {this.props.nome}
          </Text>
        </View>

        <View style={styles.CardBody}>
          <Text>
            <Icon name="text" size={20} color="black" />{" "}
            {this.props.descricao}
          </Text>
          <Text>
            <Icon name="link-variant" size={20} color="black" />{" "}
            {this.props.url}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "white",
    width: "95%",
    borderRadius: 5,
    margin: 10
  },

  CardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },

  CardHeader__Icon: {
    fontSize: 25,
    color: "#000"
  },

  CardBody: {
    padding: 10
  }
});
