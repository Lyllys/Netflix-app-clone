import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text , Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const CardProfile = ({ nomePerfil , fotoPerfil }) => {
   
    const navigation = useNavigation();

    function manipuladorPerfil () {
        navigation.navigate('Home')
    }
   
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.card} activeOpacity={0.6} onPress={manipuladorPerfil}>
                 <Image source={fotoPerfil}  style={styles.img}/> 
            </TouchableOpacity>
            <Text style={styles.subtitle}>{nomePerfil}</Text>

        </View>

    )
};

export default CardProfile;