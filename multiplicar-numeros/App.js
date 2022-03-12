import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: '_'
    };
  }

  mult() {
    this.setState({
      result: this.state.input1 * this.state.input2,
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicando Números</Text>
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder="Digite um número aqui"
          onChangeText={(n1) => this.setState({ input1: n1 })}
        />
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder="Digite outro número aqui"
          onChangeText={(n2) => this.setState({ input2: n2 })}
        />

        <Button color="pink" title="Calcular" onPress={this.mult.bind(this)} />

        <Text style={styles.texto}> Resultado: {this.state.result} </Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'none',
    paddingTop: 30,
    padding: 20,
  },
  input:{
    width: '100%',
    height: 50,
    borderWidth: 0,
    borderColor: '#FFE1A0',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    color: 'white',
    backgroundColor: 'pink',
  },
  texto: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    marginTop: 95,
  },
  botao: {
    backgroundColor: 'pink',
    color: 'white',
  }
})

export default App;