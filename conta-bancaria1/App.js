import React, { Component } from 'react';
import { View, Text, TextInput, Switch, Pressable, ScrollView } from 'react-native';
import { styles } from './style';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      input3: [
        { x: 'Selecione' },
        { x: 'Feminino' },
        { x: 'Masculino' },
      ],
      input4: [
        { nome: 'Selecione' },
        { nome: 'Ensino médio (incompleto)' },
        { nome: 'Ensino médio (completo)' },
        { nome: 'Ensino superior (incompleto)' },
        { nome: 'Ensino superior (completo)' },
        { nome: 'Pós-Graduado(a)' },
        { nome: 'Mestrado' },
        { nome: 'Doutorado' },
      ],
      input5: 0,
      input6: false,
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      limite: '',
      status: '',
      msg: '',
    };
  }

  confirm() {

    if (this.state.input1 == '' || this.state.input2 == '' || this.state.input3 == ''
      && this.state.input4 == '' || this.state.input5 == '') {
      this.setState({ msg: 'Favor preencher todos os campos!' })
    }
    else {
      let input6 = this.state.input6;
      if (input6 == true) {
        this.setState({ status: 'Brasileiro: Sim' })
      } else {
        this.setState({ status: 'Brasileiro: Não' })
      }

      this.setState({
        msg: 'Dados cadastrados!',
        nome: 'Nome: ' + this.state.input1,
        idade: 'Idade: ' + this.state.input2 + ' anos',
        sexo: 'Sexo: ' + this.state.input3[this.state.sexos].x,
        escolaridade: 'Escolaridade: ' + this.state.input4[this.state.nivel].nome,
        limite: 'Limite: R$' + this.state.input5.toFixed(2),

      })
    }
  }

  render() {

    let sexoItem = this.state.input3.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.x} />
    })

    let escolaridadeItem = this.state.input4.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })


    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Abertura de Conta</Text>
          <Text style={styles.texto}>Nome completo: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(n1) => this.setState({ input1: n1 })}
          />
          <Text style={styles.texto}>Idade: </Text>
          <TextInput
            style={styles.input2}
            keyboardType='number-pad'
            onChangeText={(n2) => this.setState({ input2: n2 })}
          />
          <Text style={styles.texto}>Sexo: </Text>
          <Picker style={styles.texto} onValueChange={(itemValue, itemIndex) => this.setState({ sexos: itemValue })}>
            {sexoItem}
          </Picker>
          <Text style={styles.texto}>Escolaridade: </Text>
          <Picker style={styles.texto} onValueChange={(itemValue, itemIndex) => this.setState({ nivel: itemValue })}>
            {escolaridadeItem}
          </Picker>
          <Text style={styles.texto}>Limite: </Text>
          <Slider
            style={{ marginRight: 15, marginLeft: 15 }}
            minimumValue={0}
            maximumValue={10000}
            step={100}
            value={this.state.input5}
            onValueChange={(valorSelecionado) => this.setState({ input5: valorSelecionado })}
            minimumTrackTintColor='#ff087f'
            maximumTrackTintColor='navy'
            thumbTintColor='#ff087f'
          />
          <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
            {this.state.input5.toFixed(0)}
          </Text>
          <Text style={styles.texto}>Brasileiro: </Text>
          <Switch
            style={{ marginRight: 15, marginLeft: 15 }}
            value={this.state.input6}
            onValueChange={(valorSwitch) => this.setState({ input6: valorSwitch })}
            thumbColor='#ff087f'
          />

          <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>
            {(this.state.input6) ? "Sim" : "Não"}
          </Text>

          <Pressable style={styles.botao} onPress={this.confirm.bind(this)}>
            <Text style={styles.botaotext}>Confirmar</Text>
          </Pressable>
          <Text style={styles.msg}>{this.state.msg}</Text>
          <View style={styles.box}>
          <Text style={styles.texto2}>{this.state.nome}</Text>
          <Text style={styles.texto2}>{this.state.idade}</Text>
          <Text style={styles.texto2}>{this.state.sexo}</Text>
          <Text style={styles.texto2}>{this.state.escolaridade}</Text>
          <Text style={styles.texto2}>{this.state.limite}</Text>
          <Text style={styles.texto2}>{this.state.status}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default App;