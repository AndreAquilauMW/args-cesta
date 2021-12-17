import React from "react";
import {StyleSheet, SafeAreaView, Image, Alert, TouchableOpacity} from "react-native";
import Texto from "../../../Components/Texto";

export default function Destalhes({nome, logoFazenda, nomeFazenda, descricao, preco, button}) {
    return (
        <>
            <SafeAreaView style={styles.cesta}>
                <Texto style={styles.nome}>{nome}</Texto>
                <SafeAreaView style={styles.fazenda}>
                    <Image source={logoFazenda} style={styles.imageFazenda}></Image>
                    <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
                </SafeAreaView>
                <Texto style={styles.descricao}>
                    {descricao}
                </Texto>
                <Texto style={styles.preco}>{preco}</Texto>

                <TouchableOpacity style={styles.button} onPress={() => {
                   Alert.alert("Compra Efetuado!!!", `${nome}, ${preco}`);
                }}>
                   <Texto style={styles.textButton}>{button}</Texto> 
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome : {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imageFazenda : {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao : {
        color: "#A3A3A3",
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    button :{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textButton: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 16
    }
});
