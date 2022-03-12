import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0
    };
  }

  mais() {
    this.setState({
      cont: this.state.cont + 1,
    });
  }

  menos() {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Contar Pessoas</Text>
        <Text style={styles.texto}> {this.state.cont} </Text>
        <Button color="pink" title="+" onPress={this.mais.bind(this)} />
        <Button color="pink" title="-" onPress={this.menos.bind(this)} />
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
    fontSize: 30,
    backgroundColor: 'pink',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 100,
    color: 'white',
    marginTop: 141,
    marginBottom: 141,
  },
  botao: {
    backgroundColor: 'pink',
    color: 'white',
  }
})

export default App;