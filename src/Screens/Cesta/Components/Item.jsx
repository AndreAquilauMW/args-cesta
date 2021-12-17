import React from "react";
import Texto from "../../../Components/Texto";
import { Image, View, StyleSheet, FlatList } from "react-native";

export default function Item({item: { nome, imagem }}) {
    return  (
            <View style={styles.item}>
                <Image source={imagem} style={styles.imagem} ></Image>
                <Texto style={styles.nome}>{nome}</Texto>
            </View>)
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
});