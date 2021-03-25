//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Estilos from './estilos/estilos.js'
import CxTx from './Componentes/CaixaDeTexto'

export default function App1(){
  return(    
    <SafeAreaView style={Estilos.conteiner}>
        <Text>CFB cursos</Text>
        <Text>Curso de React Native</Text>
        <CxTx/>
    </SafeAreaView>
 )
}

const estilos = StyleSheet.create({
  logo:{
    width: 250,
    resizeMode:'contain',
  },
  imagemFundo:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
  }
})

/*
export default class App1 extends Component{
  render(){
    return(
      <View>
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React Native</Text>
        </View>
        <View>
          <Text>Aula 3</Text>
          <Text>www.cfbcursos.com.br</Text>
        </View>
      </View>
    )
  }
}
*/


/*
============== ARROW FUNCTION ==================
(n)=>{return n*2}
n=>return n*2
(n1,n2)=>{return n1+n2}
*/

/*
================= BUTTON E ALERT ===============
<Button
        title="Mostrar Mensagem" 
        onPress={()=>Alert.alert('Curso de React Native')}
      />

*/