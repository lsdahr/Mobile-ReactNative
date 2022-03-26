import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { styles } from './style';
import { Picker } from '@react-native-picker/picker';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      moeda1: 0,
      moeda2: 0,
      msg: '',
      result: 'Resultado',
    };
  }

  confirm() {
    var moeda1 = 0;
    var moeda2 = 0;
    var valor = this.state.input1;

    if (this.state.input1 == '' || this.state.moeda1 == 0 || this.state.moeda2 == 0) {
      this.setState({ msg: 'Favor preencher todos os campos' })
    }

    else {
      if (this.state.moeda1 == 1 && this.state.moeda2 == 1 || this.state.moeda1 == 2 && this.state.moeda2 == 2 || this.state.moeda1 == 3 && this.state.moeda2 == 3) {
        this.setState({ msg: 'Selecione moedas diferentes para converter' })
      }
      else {
        switch (this.state.moeda1) {
          case 1:
            moeda1 = 1;
            break;
          case 2:
            moeda1 = 5.22;
            break;
          case 3:
            moeda1 = 6.17;
            break;
        }
        switch (this.state.moeda2) {
          case 1:
            moeda2 = 1;
            var r = (moeda1 * valor) / moeda2;
            this.setState({ result: 'R$ ' + r.toFixed(2) })
            break;
          case 2:
            moeda2 = 5.22;
            var r = (moeda1 * valor) / moeda2;
            this.setState({ result: 'US$ ' + r.toFixed(2) })
            break;
          case 3:
            moeda2 = 6.17;
            var r = (moeda1 * valor) / moeda2;
            this.setState({ result: r.toFixed(2) + ' €' })
            break;
        }
        this.setState({ msg: '' })
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Conversor de Moedas</Text>
          <Text style={styles.texto}>Digite o valor: </Text>
          
          <TextInput
            keyboardType='number-pad'
            placeholder='Digite o valor aqui: | Ex: 99.99'
            style={styles.input}
            onChangeText={(n1) => this.setState({ input1: n1 })}
          />
          <Text style={styles.texto}>De: </Text>
          <Picker style={styles.texto} selectedValue={this.state.input2} onValueChange={(id, index) => this.setState({ moeda1: id })}>
            <Picker.Item key={0} value={0} label="Selecione" />
            <Picker.Item key={1} value={1} label="Real" />
            <Picker.Item key={2} value={2} label="Dólar" />
            <Picker.Item key={3} value={3} label="Euro" />
          </Picker>
          <Text style={styles.texto}>Para: </Text>
          <Picker style={styles.texto} selectedValue={this.state.input3} onValueChange={(id, index) => this.setState({ moeda2: id })}>
            <Picker.Item key={0} value={0} label="Selecione" />
            <Picker.Item key={1} value={1} label="Real" />
            <Picker.Item key={2} value={2} label="Dólar" />
            <Picker.Item key={3} value={3} label="Euro" />
          </Picker>

          <Pressable style={styles.botao} onPress={this.confirm.bind(this)}>
            <Text style={styles.botaotext}>Converter</Text>
          </Pressable>
          <Text style={styles.msg}>{this.state.msg}</Text>
          <View style={styles.box}>
            <Text style={styles.texto2}>{this.state.result}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default App;