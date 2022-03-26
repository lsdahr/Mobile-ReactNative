import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Vagas from './src/Vagas';
import {styles} from './src/Vagas/style';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, titulo: 'Programador PHP', salario: 'R$ 2.000,00', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Paulo, SP \n• Criar, desenvolver e efetuar manutenção em plataformas de e-commerce', contato: 'www.ti-real.com.br'},
        {id: 2, titulo: 'Desenvolvedor FS', salario: 'R$ 3.780,00', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Paulo, SP \n• Necessário experiência com design responsivo, versionamento de codigo em Git, programação em NET FRAWORK-C emgeral e WebAPI. Conhecimento da plataforma windows, conhecimento geral de programações web e consumo de API ( Rest e HTTP), programação Desktp, linguagem SQL, banco de dados relacional. Conhecimento em Cloud- AWS.', contato: 'Via LinkedIn'},
        {id: 3, titulo: 'Desenvolvedor JAVA', salario: 'R$ 15.000,00', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Paulo, SP \n• Desenvolvimento de projetos em Java, onde deverá analisar, desenvolver e dar manutenções em sistemas java, lendo modelos entidade relacionamento e produzir documentos dos projetos realizados.', contato: 'www.mediarte.com.br'},
        {id: 4, titulo: 'Desenvolvedor - Pl', salario: 'R$1500,00', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Paulo, SP \n• Empresa de Tecnologia Especializada em Data Science, Web Programming e Business Analytics busca Desenvolvedor/Programador PL para atuar Home Office e fazer parte de seu Squad.', contato: 'www.rhf.com.br'},
        {id: 5, titulo: 'Desenvolvedor Java', salario: 'R$800,00', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Bernardo do Campo, SP \n• Experiência em desenvolvimento e implantação Java (Web); \n• Experiência no uso dos frameworks: Spring MVC, Apache Struts, SpringBoot; \n• Experiência no uso de pelo menos um dos frameworks da camada de apresentação : JSF, Angular, Bootstrap, JSP/JSTL/TagLib; \n• Solidos conhecimentos em HTML5, (S)CSS, JQuery;', contato: 'www.ti-real.com.br'},
        {id: 6, titulo: 'Desenvolvedor Web', salario: 'R$ 10.000,00 a R$ 12.000,00 (Bruto mensal)', descricao: '• Área e especialização profissional: Informática, TI, Telecomunicações - Programador / Desenvolvedor \n• Local de trabalho: São Paulo, SP \n• Escrever códigos compatíveis com padrões, incluindo teste/depuração em várias plataformas; \n• Projetar e implementar componentes do sistema;', contato: 'Falar com Maria'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vagas data={item}/>}
        />
      </View>
    )
  }
}
 
 
export default App;
