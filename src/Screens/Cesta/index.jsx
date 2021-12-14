import React, { Component } from "react";
import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";



export default function Cesta() {
    return (
        <>
            <Topo></Topo>
            <Detalhes></Detalhes>
        </>
    );
}


/*
export default class Cesta extends Component {
    render() {
        return <Text>Cesta</Text>;
    }
}
*/

// export default () => <Text>Cesta</Text>;