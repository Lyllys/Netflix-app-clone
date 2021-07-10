import React from "react";

import {  Text } from "react-native";



const TextoCategoria = ({nome}) => {

    return (
    
            <Text style={{ color: 'white' , fontSize: 20 , paddingBottom: 0 , paddingTop: 5 ,fontWeight: "bold" , marginLeft:10}}>{nome}</Text>
    )

};

export default TextoCategoria;