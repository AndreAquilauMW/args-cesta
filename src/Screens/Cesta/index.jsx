import React, { Component } from "react";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import Item from "./Components/Item";
import {ScrollView, StyleSheet, FlatList, View} from "react-native";
import Texto from "../../Components/Texto";


export default function Cesta({topo, detalhes, itens}) {
    return (
        <>
            <FlatList
                data={itens.lista}
                keyExtractor={(item => item.nome)}
                renderItem={Item}
                ListHeaderComponent={() => {
                    return <> 
                        <Topo {...topo}></Topo>
                        <View>

                        <Detalhes {...detalhes}></Detalhes>
                        <Texto style={ styles.titulo}>{itens.titulo}</Texto>
                        </View>
                    </>
                }}
            ></FlatList>
        </>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        paddingHorizontal: 16
    },
})


/*
export default class Cesta extends Component {
    render() {
        return <Text>Cesta</Text>;
    }
}
*/

// export default () => <Text>Cesta</Text>;