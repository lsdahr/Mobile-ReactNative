import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Luis Hora';
    let email = 'luishora27@yahoo.com.br';
    let dataNasc = '27/05/1991';
    let git = 'https://github.com/lsdahr';
    let img = 'https://avatars.githubusercontent.com/u/47646525?v=4';
 
    return(
      <View>
        <Text style={{backgroundColor: '#e5314e', color: 'black', fontSize: 20, marginTop: 20, padding: 10, textAlign: 'center', fontWeight: 'bold'}}>
          Meu Perfil - App 01
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 100, height: 100, borderRadius: 200/ 2, marginLeft: 'auto', marginRight: 'auto', marginTop: 15, marginBottom: 15}}
        />
        <Text style={{ fontSize: 20, backgroundColor: '#e5314e', color: 'white', padding: 5, marginBottom: 10 }}> Sobre Mim:</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#e5314e', fontWeight: 'bold' }}>{nome}</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#e5314e'  }}>{dataNasc}</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#e5314e', marginBottom: 10   }}>{email}</Text>

        <Text style={{ fontSize: 20, backgroundColor: '#e5314e', color: 'white', padding: 5, marginBottom: 10 }}> Formações:</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#e5314e', fontWeight: 'bold' }}>• Técnico em Administração</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#000000', marginBottom: 5  }}>ETEC Dona Escolástica Rosa</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#e5314e', fontWeight: 'bold' }}>• Técnologo em Sistemas Para Internet (Cursando)</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#000000', marginBottom: 5 }}>FATEC Rubens Lara</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#e5314e', fontWeight: 'bold' }}>• Técnico em Segurança do Trabalho (Cursando)</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#000000'  }}>ETEC Dona Escolástica Rosa</Text>

        <Text style={{ fontSize: 20, backgroundColor: '#e5314e', color: 'white', padding: 5, marginBottom: 10 }}> Projetos</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#e5314e', fontWeight: 'bold' }}>Disponíveis no meu perfil do GitHub:</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#000000', marginBottom: 5  }}>{git}</Text>
  
 
      </View>
    )
  }
}
 
export default App;
