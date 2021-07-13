import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardProfile from '../../Componentes/CardProfile/CardProfile';

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

                    <CardProfile nomePerfil='Perfil 1' fotoPerfil={require('../../assets/perfil1.jpg')} />
                    <CardProfile nomePerfil='Perfil 2' fotoPerfil={require('../../assets/perfil2.jpg')}/>
                    <CardProfile nomePerfil='Perfil 3' fotoPerfil={require('../../assets/perfil3.png')}/>
                    <CardProfile nomePerfil='Perfil 4' fotoPerfil={require('../../assets/perfil4.jpg')}/>
                    <CardProfile nomePerfil='Perfil 5' fotoPerfil={require('../../assets/perfil5.jpg')}/>
               
                </View>
            </View>
            
        </View>

    )
}

export default Profile;