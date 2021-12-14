import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto(props) {
    let font = styles.texto;
    if(props.style?.fontWeight === "bold") {
        font = styles.textoNegrito;
    }
    return <Text style={[props.style, font]}>{props.children}</Text>
}

const styles = StyleSheet.create({
    texto : {
        fontFamily : "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito : {
        fontFamily : "MontserratBold",
    fontWeight: "normal"
    }
})