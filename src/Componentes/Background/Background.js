import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../../Componentes/Navbar/Navbar";

const bannerDetails = [
    {
        detalhe: "Complexos"
    },
    {
        detalhe: "Comoventes"
    },
    {
        detalhe: "Suspense"
    },
    {
        detalhe: "Drama"
    },
    {
        detalhe: "Conspiração"
    }
]
const Background = ({ imgBanner }) => {

    return (

        <ImageBackground style={styles.background} >

            <Image source={imgBanner} style={styles.imgBackground} />

            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 500)']} style={styles.gradiente} />

            <Navbar />

            <View style={styles.bannerInfo}>
                <Text style={styles.tituloBanner}>Complexos</Text>
                <Entypo name="dot-single" size={24} color="#81B214" />
                <Text style={styles.tituloBanner}>Comoventes</Text>
                <Entypo name="dot-single" size={24} color="#81B214" />
                <Text style={styles.tituloBanner}>Suspense</Text>
                <Entypo name="dot-single" size={24} color="#81B214" />
                <Text style={styles.tituloBanner}>Drama</Text>
                <Entypo name="dot-single" size={24} color="#81B214" />
                <Text style={styles.tituloBanner}>Conspiração</Text>
            </View>
            
        </ImageBackground>


    )

};

export default Background;