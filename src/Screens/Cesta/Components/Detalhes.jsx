import React from "react";
import {StyleSheet, SafeAreaView, Image} from "react-native";
import Texto from "../../../Components/Texto";
import logo from "../../../../assets/logo.png";

export default function Destalhes() {
    return (
        <>
            <SafeAreaView style={styles.cesta}>
                <Texto style={styles.nome}>Cesta de Verduras</Texto>
                <SafeAreaView style={styles.fazenda}>
                    <Image source={logo} style={styles.imageFazenda}></Image>
                    <Texto style={styles.nomeFazenda}>JennyJack Farm</Texto>
                </SafeAreaView>
                <Texto style={styles.descricao}>
                    Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda direto para 
                    sua cozinha
                </Texto>
                <Texto style={styles.preco}>R$ 40,00</Texto>
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
    }
});
