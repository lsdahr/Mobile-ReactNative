import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  verify() {
    this.setState({
     result: Math.floor(Math.random() * 10)
    });

  }


  render(){

 
 
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>
 
        <Imagem />

        <Text style={styles.texto}> Pense em um número de 0 a 10 </Text>
        <Text style={styles.texto2}>{this.state.result} </Text>

        <Pressable style={styles.botao} onPress={this.verify.bind(this)}> 
        <Text style={styles.botaotext}>Descobrir</Text>
        </Pressable>
 
      </View>
    )
  }
}

 
class Imagem extends Component {
  render(){
    
    let img = 'https://png2.cleanpng.com/sh/7610b6a178dab8bfb91b10c4f366e544/L0KzQoG3VMExN6logpH9cnHxg8HokvVvfF5sed9ucz3nebTsTgBqdpwyfNtsZT3qcb7sTgJma6NqeeZyb36wRbaCUfU5OGk9fKc5NEixR4K7Wcg4PWI2TaoBNkKzRIO7Vcc5QF91htk=/transparent-games-dice-pink-dice-game-recreation-5e91e8088d5048.7149875115866204245788.png';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 290, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 40, marginBottom: 5}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'hotpink',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  }, 
  texto: {
    textAlign: 'center',
    fontSize: 24,
    color: 'hotpink',
    marginTop: 20,
    marginBottom: 50,
  },
  texto2: {
    textAlign: 'center',
    fontSize: 70,
    color: 'hotpink',
    marginTop: 20,
    marginBottom: 50,
  },
  botao : {
    backgroundColor: 'hotpink',
    borderRadius: 200/ 2,
    width: 350,
    height: 55,
    padding: 10,
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop: 1,
  },
  botaotext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})
 
export default App;
