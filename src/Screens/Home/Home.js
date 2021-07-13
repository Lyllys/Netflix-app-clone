import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CardsFilmes from "../../Componentes/CardsFilmes/CardsFilmes";
import TextoCategoria from "../../Componentes/TextoCategoria/TextoCategoria";
import Background from "../../Componentes/Background/Background";
import Botao from "../../Componentes/Botao/Botao";

const bannersBrasileiros = [
    {
        id: 1,
        foto: require('../../assets/FilmesESeries/img1.jpg')
    },
    {
        id: 2,
        foto: require('../../assets/FilmesESeries/img2.jpg')
    },
    {
        id: 3,
        foto: require('../../assets/FilmesESeries/img3.jpg')
    },
    {
        id: 4,
        foto: require('../../assets/FilmesESeries/img4.jpg')
    },
    {
        id: 5,
        foto: require('../../assets/FilmesESeries/img5.jpg')
    },
    {
        id: 6,
        foto: require('../../assets/FilmesESeries/img6.jpg')
    },
    {
        id: 7,
        foto: require('../../assets/FilmesESeries/img7.jpg')
    },
];

const bannersLancamentos = [
    {
        id: 1,
        foto: require('../../assets/FilmesESeries/lan1.jpg')
    },
    {
        id: 2,
        foto: require('../../assets/FilmesESeries/lan2.jpg')
    },
    {
        id: 3,
        foto: require('../../assets/FilmesESeries/lan3.jpg')

    },
    {
        id: 4,
        foto: require('../../assets/FilmesESeries/lan4.jpg')

    },
    {
        id: 5,
        foto: require('../../assets/FilmesESeries/lan5.jpg')

    },
    {
        id: 6,
        foto: require('../../assets/FilmesESeries/lan6.jpg')

    },
    {
        id: 7,
        foto: require('../../assets/FilmesESeries/lan7.png')

    },
];

const bannersEmAlta = [
    {
        id: 1,
        foto: require('../../assets/FilmesESeries/alt1.jpeg')
    },
    {
        id: 2,
        foto: require('../../assets/FilmesESeries/alt2.jpg')
    },
    {
        id: 3,
        foto: require('../../assets/FilmesESeries/alt3.jpg')
    },
    {
        id: 4,
        foto: require('../../assets/FilmesESeries/alt4.jpg')
    },
    {
        id: 5,
        foto: require('../../assets/FilmesESeries/alt5.jpg')
    },
    {
        id: 6,
        foto: require('../../assets/FilmesESeries/alt6.jpg')
    },
    {
        id: 7,
        foto: require('../../assets/FilmesESeries/alt7.jpeg')
    },
];

const bannersAssistirNovamente = [
    {
        id: 1,
        foto: require('../../assets/FilmesESeries/asn1.jpg')
    },
    {
        id: 2,
        foto: require('../../assets/FilmesESeries/asn2.jpg')
    },
    {
        id: 3,
        foto: require('../../assets/FilmesESeries/asn3.jpg')
    },
    {
        id: 4,
        foto: require('../../assets/FilmesESeries/asn4.jpg')
    },
    {
        id: 5,
        foto: require('../../assets/FilmesESeries/asn5.jpg')
    },
    {
        id: 6,
        foto: require('../../assets/FilmesESeries/asn6.jpg')
    },
    {
        id: 7,
        foto: require('../../assets/FilmesESeries/asn7.jpg')
    },
];

const Home = () => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled>

            <Background imgBanner={require('../../assets/banner.jpg')} />

            <View style={styles.container}>
                <TouchableOpacity style={styles.containerMinhaLista} activeOpacity={0.7}>
                    <AntDesign name="plus" size={24} color="white" />
                    <Text style={styles.tituloMenu}>Minha lista</Text>
                </TouchableOpacity>
                <Botao texto='Assistir' />
                <TouchableOpacity style={styles.containerSaibaMais} activeOpacity={0.7}>
                    <Ionicons name="md-information-circle-outline" size={24} color="white" />
                    <Text style={styles.tituloMenu}>Saiba mais</Text>
                </TouchableOpacity>

            </View>

            <TextoCategoria nome='Filmes e séries brasileiros' />
            <View >
                <FlatList
                    data={bannersBrasileiros}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (<View>
                            <CardsFilmes fotoPerfil={item.foto} />
                        </View>
                        )
                    }
                    }
                />
            </View>

            <TextoCategoria nome='Lançamentos' />
            <View >
                <FlatList
                    data={bannersLancamentos}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (<View>
                            <CardsFilmes fotoPerfil={item.foto} />
                        </View>
                        )
                    }
                    }
                />
            </View>

            <TextoCategoria nome='Em alta' />
            <View >
                <FlatList
                    data={bannersEmAlta}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (<View>
                            <CardsFilmes fotoPerfil={item.foto} />
                        </View>
                        )
                    }
                    }
                />
            </View>

            <TextoCategoria nome='Assistir novamente' />
            <View >
                <FlatList
                    data={bannersAssistirNovamente}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (<View>
                            <CardsFilmes fotoPerfil={item.foto} />
                        </View>
                        )
                    }
                    }
                />
            </View>

        </ScrollView>


    )

};

export default Home;