import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    container2:{
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
        color: 'pink',
        backgroundColor: 'gray',
        fontSize: 30,
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 80 / 2,
    },
    textotitulo: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 20,
        marginBottom: 2,
        color: 'pink',
        fontWeight: 'bold',
    },
    texto: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
        marginBottom: 2,
        color: 'pink',
    },
    texto2:{
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        marginBottom: 20,
        color: 'pink',
    },
    texto3:{
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        marginBottom: 2,
        color: 'pink',
    },
    box: {
        backgroundColor: 'gray',
        borderRadius: 80 / 2,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    box2:{
        backgroundColor: 'gray',
        marginTop: 40,
        marginRight: 15,
        marginLeft: 15,
    },
    image: {
        width: 300, 
        height: 300, 
        borderRadius: 300 / 2, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    borda: {
        borderStyle: 'none',
        borderWidth: 1,
        borderColor: 'white',
        padding: 2,
        borderRadius: 300/2,
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 70, 
        marginBottom: 15,
       

    }
})

export { styles };