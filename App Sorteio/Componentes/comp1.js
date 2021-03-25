import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Estilos from '../estilos/estilos.js'

let nt;

export default function(props){
    nt=props.nota

    return(
        <Text style={Estilos.textoCursos}>CFB Cursos - Curso de {props.curso} nota: {nt}</Text>
    )
}