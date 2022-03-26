import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import { styles } from './style'

class App extends Component {

  render() {
    const image = { uri: "" };
    
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.imagem}>
        <View opacity={0.5} style={styles.boxtitulo}>
        <Text style={styles.titulo}>Anúncios</Text>
        </View>
        <View style={styles.box}>
          <ScrollView horizontal={true}>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box1}>
              <Image
                source={{ uri: 'https://a-static.mlcdn.com.br/1500x1500/bicicleta-eletrica-eco-350w-sousa-bike/bicicleteveiculoseletricos/4330868063/1bc60af4ded055bc6928fbc56e03aa10.jpg' }}
                style={styles.image}
              />
              <Text style={styles.texto}>Bicicleta Elétrica</Text>
              <Text style={styles.texto2}>É necessária a ajuda dos pedais, o motor é somente um auxílio para que as pedaladas sejam mais suaves. O peso máximo recomendado pelo fabricante é de até 100 quilos, lembrando que quanto maior o peso, menor a autonomia.</Text>
              <Text style={styles.texto3}>R$4.790,00</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box2}>
            <Image
                source={{ uri: 'https://decathlonpro.vteximg.com.br/arquivos/ids/2370172-500-500/mtb-helmet-st-500-blue-l-59-61cm1.jpg' }}
                style={styles.image}
              />
              <Text style={styles.texto}>Capacete para bicicleta</Text>
              <Text style={styles.texto2}>Após 5 anos de utilização
A espuma do capacete fica deteriorada. A sua deterioração pode dever-se a choques, ao seu local de armazenamento, ao clima e à sua utilização. Aconselhamos a substituir o seu capacete, pelo menos, de 5 em 5 anos</Text>
              <Text style={styles.texto3}>R$199,99</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box3}>
            <Image
                source={{ uri: 'https://decathlonpro.vteximg.com.br/arquivos/ids/2357541-500-500/roadr-500-m-mittens-blk-s1.jpg' }}
                style={styles.image}
              />
              <Text style={styles.texto}>Luvas para ciclismo</Text>
              <Text style={styles.texto2}>Desenvolvido para o ciclista que procura luvas confortáveis com almofadas na palma da mão, tecido leve e respirável. A luva Road 900 oferece conforto durante suas pedaladas, graças a palma com material que absorve as vibrações. (Vendido Par).</Text>
              <Text style={styles.texto3}>R$90,00</Text>
            </View>
            </View>
          </ScrollView>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

export default App;