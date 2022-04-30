import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../../style';

export default function Pessoal() {
  let nome = 'Luis da Hora';
  let email = 'luis.silva209@fatec.sp.gov.br';
  let dataNasc = '27/05/1991';
  let tel = '(13) 0000-0000';
  let git = 'https://github.com/lsdahr';
  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/47646525?v=4' }}
          style={styles.image}
        />
        </View>
      <View style={styles.box}>
        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Data de Nascimento: {dataNasc}</Text>
        <Text style={styles.texto}>E-mail: {email}</Text>
        <Text style={styles.texto}>Celular: {tel}</Text>
        <Text style={styles.texto}>Git: {git}</Text>
      </View>

    </View>
  );
}
