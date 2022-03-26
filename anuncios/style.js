import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imagem: {
        flex: 1,
        width: '100%',
      },
    box: {
        marginTop: 25,
        marginBottom: 25,
        alignItems:'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    boxtitulo: {
        backgroundColor: 'white',
        height: 85,
        width: '100%',
        margin: 'auto',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 40,
        color: 'pink',
        fontWeight: 'bold',
        paddingTop: 20,
        padding: 5,
    },
    texto: {
        fontSize: 25,
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
    },
    texto2: {
        fontSize: 15,
        color: 'white',
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,

    },
    texto3: {
        fontSize: 45,
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
    },

    box1:{
        backgroundColor: 'pink',
        height: 650,
        width: 300,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
      },
      box2:{
        backgroundColor: 'pink',
        height: 650,
        width: 300,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
      },
      box3:{
        backgroundColor: 'pink',
        height: 650,
        width: 300,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
      },

      image:{
        width: 200, 
        height: 200,
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 30, 
        marginBottom: 15,
        borderRadius: 50/2,
      }
})

export { styles };
