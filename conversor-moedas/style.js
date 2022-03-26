import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    box: {
        backgroundColor: 'black',
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'pink',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 35,
        padding: 15,
        marginBottom: 5,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        marginLeft: 15,
        
    },
    texto2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    msg: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    botao: {
        backgroundColor: 'black',
        borderRadius: 10,
        width: 200,
        height: 55,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 70,
        marginBottom: 20,
    },
    botaotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    input:{
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 25,
        fontSize: 15,
        padding: 10,
        color: 'gray',
        borderColor: 'black',
        textAlign: 'center',
    },
})

export { styles };
