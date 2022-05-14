import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import * as SQLite from 'expo-sqlite';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
 
const db = SQLite.openDatabase("db_produto.db");
 
const App = () => {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [quantidade, setQuantidade] = useState("");
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const deleteProduto = (id) => {
    db.transaction(tx => {
      tx.executeSql(`DELETE FROM produtos WHERE id = ?`, [id],
        (sqlTxn, res) => {
          console.log(`${produto} produtos deletado com sucesso!`);
          setProdutos("");
          getProdutos();
        }, error => {
          console.log("Erro ao deletar um produto " + error.message);
        },
      )
    })
  }

  const incluirProduto = () => {
    if (!produto || !quantidade) {
      alert("Informe o produto e sua quantidade");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (quantidade,nome) VALUES (?,?)`,
        [produto, quantidade],
        (sqlTxn, res) => {
          console.log(` ${quantidade} ${produto} produto adicionada com sucesso!`);
          getProdutos();
          setProduto("");
          setQuantidade("");
        },
        error => {
          console.log("Erro ao inserir uma produto " + error.message);
        },
      );
    });
  };
 
  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, quantidade: item.quantidade, nome: item.nome});
            }
 
            setProdutos(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };
 
  const renderProduto = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#FFEF78",
      }}>
          <View style={{flexDirection: "row"}}>
            <Text style={{ fontSize: 20, color: '#EB92BE', fontWeight: 'bold' }}>{item.nome}x </Text>
            <Text style={{ fontSize: 20, color: '#EB92BE', fontWeight: 'bold' }}>{item.quantidade}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => {deleteProduto(item.id)}}>
              <Fontisto name='shopping-basket-remove' size={25} style={{color: "red"}}/>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
 
  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getProdutos();
    }
    fetchData();
  }, []);


  return (
    <View style={{paddingTop: 20}}>
      
      <StatusBar backgroundColor="white" />

      <Text style={styles.titulo}>
        Lista de compras <Fontisto name='shopping-store' size={25} style={{color: "pink"}}/>
      </Text>
 
    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: '#FFEF78'}}>

      <TextInput style={styles.input2}
        placeholder="Qtd"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType='numeric'
      />

      <TextInput style={styles.input}
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
      />
  

      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            onPress={incluirProduto}
            >
            <Fontisto name='shopping-basket-add' size={30} style={{color: "green"}} />
          </TouchableOpacity>
      </View>
    </View>

 
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        key={t => t.id}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
   titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#D3D3D3',
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
  },
  input:{
    width: 290,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#D3D3D3',
    color: 'white',
    fontSize: 18,
    padding: 10,
  },
  input2: {
    width: 60,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#D3D3D3',
    color: 'white',
    fontSize: 18,
    padding: 10,
  }
});

export default App;