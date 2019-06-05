import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Login extends Component {
  email = "teste@teste.com";
  senha = "teste123";

  constructor() {
    super();
    this.state = { email: "", senha: "" };
  }

  verificaAcesso(){
    console.log(this.state.email, this.state.senha);
    
    let msgDeErro = 'E-mail ou senha inválidos, tente novamente! \n';
    if(this.email == this.state.email && this.senha == this.state.senha ){
      this.props.navigation.navigate("Repos")
    } else { 
      !this.state.email.includes("@") ? msgDeErro += 'O e-mail deve conter o caractere "@" ! \n' : '' ;
      this.state.senha.length < 6 ? msgDeErro += 'A senha deve conter no mínimo 6 caracteres ! \n' : '' ;

      alert(msgDeErro)
    }

  }

  render() {
    return (
      <ImageBackground
        source={
          require("../assets/images/bgimg.jpg")
        }
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
            onChangeText={email => this.setState({ email })}
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
            onPress={() => this.verificaAcesso()}
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
