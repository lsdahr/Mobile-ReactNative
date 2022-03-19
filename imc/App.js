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
    let peso = this.state.input1;
    let altura = this.state.input2;

    let calc = (peso/(altura*altura)).toFixed(2);
    if(calc < 18.5){
      this.setState({mensagem: 'Abaixo do Peso!'});
    } if (calc >= 18.5 && calc <= 24.9){
      this.setState({mensagem: 'Peso Normal!'});
    } if (calc >= 25 && calc <= 29.9){
      this.setState({mensagem: 'Sobrepeso!'});
    } if (calc >= 30 && calc <= 34.9){
      this.setState({mensagem: 'Obesidade Grau I!'});
    } if (calc >= 35 && calc <= 39.9){
      this.setState({mensagem: 'Obesidade Grau II!'});
    } if (calc >= 40){
      this.setState({mensagem: 'Obesidade Grau III ou Mórbida!'});
    }
    

    this.setState({result: calc})
  }


  render(){

 
 
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Cálculo do IMC</Text>
 
        <Imagem />

        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Peso (ex: 69.2)"
          onChangeText={(n1) => this.setState({ input1: n1 })}
        />
        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Altura (ex: 1.70)"
          onChangeText={(n2) => this.setState({ input2: n2 })}
        />

        <Pressable style={styles.botao} onPress={this.verify.bind(this)}> 
        <Text style={styles.botaotext}>Verificar</Text>
        </Pressable>

        <Text style={styles.texto}> Seu IMC: {this.state.result} </Text>
        <Text style={styles.texto}> Classificação: {this.state.mensagem} </Text>
 
      </View>
    )
  }
}
 
class Imagem extends Component {
  render(){
    
    let img = 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc.png';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 300, height: 220, marginLeft: 'auto', marginRight: 'auto', marginTop: 35, marginBottom: 35}}
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
    padding: 15,
  }, 
  input:{
    width:250,
    height: 45,
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 15,
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'hotpink',
    borderColor: 'hotpink',
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
    color: 'hotpink',
    marginTop: 20,
  },
  botao : {
    backgroundColor: 'hotpink',
    borderRadius: 200/ 2,
    width: 350,
    height: 55,
    padding: 10,
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