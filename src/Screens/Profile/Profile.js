import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardProfile from '../../Componentes/CardProfile/CardProfile';
import Perfil1 from '../../assets/perfil1.jpg';
import Perfil2 from '../../assets/perfil2.jpg';
import Perfil3 from '../../assets/perfil3.png';
import Perfil4 from '../../assets/perfil4.jpg';
import Perfil5 from '../../assets/perfil5.jpg';

const Profile = () => {
    return (
        <View>

            <View style={styles.imgContainer}>
                <Image source={Logo} style={styles.img} />
                <MaterialCommunityIcons name="pencil" size={24} color="white" style={styles.icone} />
            </View>


            <View style={styles.containerTitle}>
                <Text style={styles.title}>Quem está assistindo?</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.containerCards}>

                    <CardProfile nomePerfil='Perfil 1' fotoPerfil={Perfil1} />
                    <CardProfile nomePerfil='Perfil 2' fotoPerfil={Perfil2}/>
                    <CardProfile nomePerfil='Perfil 3' fotoPerfil={Perfil3}/>
                    <CardProfile nomePerfil='Perfil 4' fotoPerfil={Perfil4}/>
                    <CardProfile nomePerfil='Perfil 5' fotoPerfil={Perfil5}/>
               
                </View>
            </View>




        </View>

    )
}

export default Profile;