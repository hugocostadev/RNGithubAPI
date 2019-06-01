import React, { Component } from "react";
import { Text, View, ImageBackground, TextInput } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Login extends Component {
  email = "teste@teste.com";
  senha = "teste";

  constructor(props) {
    super(props);
    this.state = { text: "", senha: "" };
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://media.idownloadblog.com/wp-content/uploads/2019/03/WWDC-2019-iPhone-wallpaper-mock-up.jpg"
        }}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
            margin: 15,
            borderRadius: 5,
            opacity: 0.8
          }}
        >
          <Icon
            name="github-circle"
            size={100}
            color="black"
            style={{ marginVertical: 10 }}
          />

          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Email"
            leftIcon={<Icon name="account" size={24} color="black" />}
            onChangeText={text => this.setState({ text })}
            autoCompleteType="email"
          />

          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Senha"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            autoCompleteType="password"
            onChangeText={senha => this.setState({ senha })}
            secureTextEntry={true}
          />

          <Button
            onPress={() => this.props.navigation.navigate("Repos")}
            containerStyle={{
              backgroundColor: "#f05a1a",
              width: "100%",
              margin: 20
            }}
            buttonStyle={{ backgroundColor: "#f05a1a" }}
            title="Entrar"
            icon={
              <Icon
                name="send"
                size={30}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
          />
        </View>
      </ImageBackground>
    );
  }
}
