import React from "react";
import { View, TouchableOpacity, Image} from "react-native";
import styles from "./styles";

const CardsFilmes = ({fotoPerfil}) => {
    return (
        <View style={styles.container} > 
              
                <TouchableOpacity  activeOpacity={0.6}>
                <View >
                    <Image source={fotoPerfil} style={styles.img} />
                    </View>
                </TouchableOpacity>
          
        </View>

    )
};

export default CardsFilmes;