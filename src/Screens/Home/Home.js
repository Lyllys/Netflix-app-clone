import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Banner from '../../assets/banner.jpg';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CardsFilmes from "../../Componentes/CardsFilmes/CardsFilmes";
import TextoCategoria from "../../Componentes/TextoCategoria/TextoCategoria";
import Background from "../../Componentes/Background/Background";
import img1 from '../../assets/FilmesESeries/img1.jpg';
import img2 from '../../assets/FilmesESeries/img2.jpg';
import img3 from '../../assets/FilmesESeries/img3.jpg';
import img4 from '../../assets/FilmesESeries/img4.jpg';
import img5 from '../../assets/FilmesESeries/img5.jpg';
import img6 from '../../assets/FilmesESeries/img6.jpg';
import img7 from '../../assets/FilmesESeries/img7.jpg';
import lan1 from '../../assets/FilmesESeries/lan1.jpg';
import lan2 from '../../assets/FilmesESeries/lan2.jpg';
import lan3 from '../../assets/FilmesESeries/lan3.jpg';
import lan4 from '../../assets/FilmesESeries/lan4.jpg';
import lan5 from '../../assets/FilmesESeries/lan5.jpg';
import lan6 from '../../assets/FilmesESeries/lan6.jpg';
import lan7 from '../../assets/FilmesESeries/lan7.png';
import alt1 from '../../assets/FilmesESeries/alt1.jpeg';
import alt2 from '../../assets/FilmesESeries/alt2.jpg';
import alt3 from '../../assets/FilmesESeries/alt3.jpg';
import alt4 from '../../assets/FilmesESeries/alt4.jpg';
import alt5 from '../../assets/FilmesESeries/alt5.jpg';
import alt6 from '../../assets/FilmesESeries/alt6.jpg';
import alt7 from '../../assets/FilmesESeries/alt7.jpeg';
import asn1 from '../../assets/FilmesESeries/asn1.jpg';
import asn2 from '../../assets/FilmesESeries/asn2.jpg';
import asn3 from '../../assets/FilmesESeries/asn3.jpg';
import asn4 from '../../assets/FilmesESeries/asn4.jpg';
import asn5 from '../../assets/FilmesESeries/asn5.jpg';
import asn6 from '../../assets/FilmesESeries/asn6.jpg';
import asn7 from '../../assets/FilmesESeries/asn7.jpg';

const bannersBrasileiros = [
    {
        foto: img1
    },
    {
        foto: img2
    },
    {
        foto: img3
    },
    {
        foto: img4
    },
    {
        foto: img5
    },
    {
        foto: img6
    },
    {
        foto: img7
    },
];

const bannersLancamentos = [
    {
        foto: lan1
    },
    {
        foto: lan2
    },
    {
        foto: lan3
    },
    {
        foto: lan4
    },
    {
        foto: lan5
    },
    {
        foto: lan6
    },
    {
        foto: lan7
    },
];

const bannersEmAlta = [
    {
        foto: alt1
    },
    {
        foto: alt2
    },
    {
        foto: alt3
    },
    {
        foto: alt4
    },
    {
        foto: alt5
    },
    {
        foto: alt6
    },
    {
        foto: alt7
    },
];

const bannersAssistirNovamente = [
    {
        foto: asn1
    },
    {
        foto: asn2
    },
    {
        foto: asn3
    },
    {
        foto: asn4
    },
    {
        foto: asn5
    },
    {
        foto: asn6
    },
    {
        foto: asn7
    },
];

const Home = () => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled>

                <Background imgBanner={Banner} />
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.containerMinhaLista} activeOpacity={0.7}>
                    <AntDesign name="plus" size={24} color="white" />
                    <Text style={styles.tituloMenu}>Minha lista</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                    <Entypo name="controller-play" size={24} color="black" />
                    <Text style={styles.tituloBtn}>Assistir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerSaibaMais} activeOpacity={0.7}>
                    <Ionicons name="md-information-circle-outline" size={24} color="white" />
                    <Text style={styles.tituloMenu}>Saiba mais</Text>
                </TouchableOpacity>

            </View>

            <TextoCategoria nome='Filmes e séries brasileiros' />
            <View >
                <ScrollView
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>

                        {bannersBrasileiros.map((banner, indice) => <CardsFilmes
                            key={indice}
                            fotoPerfil={banner.foto}
                        />)}
                    </View>
                </ScrollView>
            </View>

            <TextoCategoria nome='Lançamentos' />
            <View >
                <ScrollView
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>

                        {bannersLancamentos.map((banner, indice) => <CardsFilmes
                            key={indice}
                            fotoPerfil={banner.foto}
                        />)}
                    </View>
                </ScrollView>
            </View>

            <TextoCategoria nome='Em alta' />
            <View >
                <ScrollView
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>

                        {bannersEmAlta.map((banner, indice) => <CardsFilmes
                            key={indice}
                            fotoPerfil={banner.foto}
                        />)}
                    </View>
                </ScrollView>
            </View>

            <TextoCategoria nome='Assistir novamente' />
            <View >
                <ScrollView
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.container}>

                        {bannersAssistirNovamente.map((banner, indice) => <CardsFilmes
                            key={indice}
                            fotoPerfil={banner.foto}
                        />)}
                    </View>
                </ScrollView>
            </View>

        </ScrollView>


    )

};

export default Home;