import React from "react";
import { Image, StyleSheet, View } from "react-native";


import Texto from '../../../componentes/Texto';
import BotaoEstilo from "../../../componentes/Botao";

export default function Detalhes({ nomeProduto, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nomeProduto}>{ nomeProduto }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.iconFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>       
        <Texto style={estilos.descricao}>
              { descricao }
        </Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>

        <BotaoEstilo texto={botao} style={estilos.botao} onPress={() =>{}}/>
    </>
}

const estilos = StyleSheet.create({
    nomeProduto: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,        
        fontWeight: "bold"       
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    iconFazenda: {
        height: 32,
        width: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16
    }
})
