import React from "react";
import { TouchableOpacity , Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import styles from "./styles";


const Botao = ({texto}) => {
    return(
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Entypo name="controller-play" size={24} color="black" />
        <Text style={styles.tituloBtn}>{texto}</Text>
    </TouchableOpacity>
    )
};

export default Botao;