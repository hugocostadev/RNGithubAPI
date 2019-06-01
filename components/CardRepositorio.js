import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

export default class CardRepositorio extends Component {

  render() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.Card} elevation={10}>
          <View style={styles.CardHeader}>
            <Text style={styles.CardHeader__NomeVendedor}>
              {this.props.nome}
            </Text>
          </View>

          <View style={styles.CardBody}>
   
          </View>
        </View>
      </TouchableNativeFeedback>
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

  CardHeader__NomeVendedor: {
    fontSize: 16,
    color: "#000",
    width: "85%"
  },

  CardHeader__Notificacao: {
    fontSize: 25,
    color: "#000"
  },

  CardBody: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 5
  },

  CardItemStats: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },

  CardItemStats__Icon: {
    fontSize: 30,
    color: "#000"
  },

  CardItemStats__Value: {
    fontSize: 16,
    color: "#000"
  },

  CardItemStats__Text: {
    fontSize: 14
  }
});
