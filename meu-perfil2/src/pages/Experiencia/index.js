import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style';
 
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
  <View style={styles.container2}>
  <View style={styles.box2}>
    <Text style={styles.textotitulo}>• Monitor Equipe Web (2019-2020)</Text>
    <Text style={styles.texto3}>Fatec - Santos/Rubens Lara</Text>
    
  </View>

</View>
  );
}