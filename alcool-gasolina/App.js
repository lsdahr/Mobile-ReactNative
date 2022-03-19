import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: '',
      mensagem: '',
    };
  }

  verify() {
    let alcool = this.state.input1;
    let gasolina = this.state.input2;

    let calc = (alcool/gasolina).toFixed(2);
    if(calc < 0.7){
      this.setState({mensagem: 'Álcool é a melhor opção!'});
    }
    else {
      this.setState({mensagem: 'Gasolina é a melhor opção!'});
    }

    this.setState({result: calc})
  }


  render(){

 
 
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Álcool ou Gasolina</Text>

        <Imagem />

        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={(n1) => this.setState({ input1: n1 })}
        />
        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={(n2) => this.setState({ input2: n2 })}
        />

        <Pressable style={styles.botao} onPress={this.verify.bind(this)}> 
        <Text style={styles.botaotext}>Verificar</Text>
        </Pressable>

        <Text style={styles.texto}> Resultado: {this.state.result} </Text>
        <Text style={styles.texto}> {this.state.mensagem} </Text>
 
      </View>
    )
  }
}

class Imagem extends Component {
  render(){
    
    let img = 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 338, height: 180, marginLeft: 'auto', marginRight: 'auto', marginTop: 35, marginBottom: 35}}
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
    paddingTop: 30,
    paddingBottom: 30,
    padding: 25,
  }, 

  input:{
    width: 300,
    height: 40,
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 3,
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    color: 'hotpink',
    borderColor: 'hotpink',
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    color: 'hotpink',
    marginTop: 20,
  },
  botao : {
    backgroundColor: 'hotpink',
    borderRadius: 200/ 2,
    width: 300,
    height: 50,
    padding: 5,
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop: 20,
  },
  botaotext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})
 
export default App;