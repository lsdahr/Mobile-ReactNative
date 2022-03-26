import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'

class Vagas extends Component {
    render() {
        return (
            <View opacity={0.8} style={styles.areaVagas}>
                <Text style={styles.tituloVagas}>{this.props.data.titulo} </Text>
                <Text style={styles.textoVagas}>Salário: {this.props.data.salario} </Text>
                <Text style={styles.textoVagas}>Descrição {"\n"}{this.props.data.descricao}</Text>
                <Text style={styles.textoVagas}>Contato: {this.props.data.contato} </Text>
            </View >
        );
    }
}

export default Vagas;
