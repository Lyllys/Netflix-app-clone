import React from "react";
import { View, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

import styles from "./styles";

const BannerDetails = ({detalhe}) => {
    return (
        <View style={styles.bannerInfo}>
            <Text style={styles.tituloBanner}>{detalhe}</Text>
            <Entypo name="dot-single" size={24} color="#81B214" />
            <Text style={styles.tituloBanner}>Comoventes</Text>
                    <Entypo name="dot-single" size={24} color="#81B214" />
                    <Text style={styles.tituloBanner}>Suspense</Text>
                    <Entypo name="dot-single" size={24} color="#81B214" />
                    <Text style={styles.tituloBanner}>Drama</Text>
                    <Entypo name="dot-single" size={24} color="#81B214" />
                    <Text style={styles.tituloBanner}>Conspiração</Text>
        </View>
    )
}

export default BannerDetails;