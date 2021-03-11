import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Style from './Estilos/style'

export default function imc (){
  
  let altura = 1.8
  let peso = 60
  let resultadoIMC = peso / (altura * altura)
  let resultado = null

  if (resultadoIMC <= 18.5){
    resultado = 'Magreza'
  } else if (resultadoIMC >= 18.6 && resultadoIMC <= 24.9) {
    resultado = 'Peso Normal'
  } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
    resultado = 'Sobrepeso'
  } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
    resultado = 'Obesidade de Grau I'
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
    resultado = 'Obesidade de Grau II'
  } else {
    resultado = 'Obesidade de Grau III'
  }

  return(
    <View style={Style.container}>
      <View>
        <Text style={Style.txtprincipal}> CALCULO DE IMC </Text>
      </View>
      <View>
        <TextInput>Digite seu peso</TextInput>
        <TextInput>Digite sua altura</TextInput>
      </View>
      <View>
        <Text style={Style.txtresposta}>IMC: {resultadoIMC.toFixed(2)}</Text>
        <Text style={Style.txtresposta}>Nível de IMC: {resultado}</Text>
      </View>
    </View>
  )
}
