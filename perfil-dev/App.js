import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      perfilValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorPerfil = this.state.perfilValor;
    const response = await api.get(valorPerfil);
    this.setState({
      perfil: response.data,
    });
    this.setState({
      valorRetorno: `
        ID: ${this.state.perfil.id}
        NOME: ${this.state.perfil.name} 
        REPOSITÓRIOS: ${this.state.perfil.public_repos}
        SEGUIDORES: ${this.state.perfil.followers}
        SEGUINDO: ${this.state.perfil.following}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    let img = this.state.perfil.avatar_url
      ? this.state.perfil.avatar_url
      : 'https://pngimg.com/uploads/github/github_PNG41.png';

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.titulo}>GitHub Profile</Text>
          <FontAwesome style={{ marginLeft: 10, padding: 5, }} name="github-alt" size={45} color={'#8675A9'}/>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Informe o usuário"
            style={styles.input}
            onChangeText={(value) => this.setState({ perfilValor: value })}
          />

          <TouchableOpacity onPress={this.retorno}>
            <FontAwesome style={{ marginLeft: 10 }} name="search" size={40} color={'#8675A9'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={{ uri: img }}
            style={{ width: 300, height: 300, justifyContent: 'center', borderRadius: 200}}
          />
        </View>
        <View style={styles.box}>
          <Text style={{ fontSize: 20, color: "white" }}>{this.state.valorRetorno}</Text>
        </View>
        <View style={styles.box1}>
          <Text style={{ textAlign: 'center' }}>{this.state.valorRetorno}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: 'gray',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    color: 'white',
    backgroundColor: 'pink', 
    padding: 5,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 300,
    backgroundColor: "#FFD5CD",
    color: '#8675A9',
    borderColor: 'black',
    borderWidth:3,
  },
  box:{
    backgroundColor: "black",
    margin: 20,
    borderRadius: 20,
  },
  box1:{
    marginTop: 350,
  },
});
export default App;
