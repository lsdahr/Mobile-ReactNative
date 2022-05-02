import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box: {
    marginTop: 80,
    backgroundColor: 'pink',
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    marginBottom: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'pink',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  texto: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginLeft: 15,
  },
  texto2: {
    fontSize: 18,
    color: 'white',
  },
  msg: {
    textAlign: 'center',
    fontSize: 18,
    color: 'pink',
  },
  botao: {
    backgroundColor: 'pink',
    borderRadius: 200 / 2,
    width: 350,
    height: 55,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 15,
  },
  botaotext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  input: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 15,
    fontSize: 20,
    padding: 10,
    color: 'white',
    borderColor: 'pink',
  },
  input2: {
    width: '20%',
    height: 45,
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 15,
    fontSize: 20,
    padding: 10,
    color: 'white',
    borderColor: 'pink',
    textAlign: 'center',
  },
});

export { styles };
