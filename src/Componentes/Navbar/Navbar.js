import React from "react";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import IconeLogo from '../../assets/iconeLogo.png';
import { Feather } from '@expo/vector-icons';
import IconePerfil from '../../assets/perfil2nav.jpg';
import { LinearGradient } from "expo-linear-gradient";


const Navbar = () => {

    return (
        <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0, 0, 0,0)']} style={styles.navBar}>

            <TouchableOpacity activeOpacity={0.7}>
                <Image source={IconeLogo} style={styles.iconeLogo} />
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7}>
                <Feather name="search" size={24} style={styles.iconeBusca} />
            </TouchableOpacity>
            <TouchableOpacity  activeOpacity={0.7}>
                <Image source={IconePerfil} style={styles.iconePerfil} />
            </TouchableOpacity>

             <View style={styles.navbarItens}>
                
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.navBarItem}>Séries</Text>
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.navBarItem}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.navBarItem}>Minha lista</Text>
                </TouchableOpacity>
        
            </View> 

        </LinearGradient>

    )
};

export default Navbar;