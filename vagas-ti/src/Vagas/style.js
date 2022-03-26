import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    areaVagas: {
        backgroundColor: 'pink',
        marginTop: 15,
    },
    textoVagas: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'left',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,

    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: 'pink',
        color: 'gray',
        fontWeight: 'bold',
        paddingTop: 35,
        padding: 15,
    },
    tituloVagas: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        color: 'gray',
    },
    boxtitulo: {
        backgroundColor: 'white',
        height: 85,
        width: '100%',
        margin: 'auto',
    },
})

export { styles };
