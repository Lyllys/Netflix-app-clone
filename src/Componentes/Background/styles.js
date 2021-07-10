import { StyleSheet } from "react-native";
import { font } from "../../helpers/fonts";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black', 
    },

    imgBackground: {
        width: 410,
        height: 540,    
    },

    gradiente: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '105%',

    },

    bannerInfo: {
        position: 'absolute',
        top: 440,
        left: 5,
        right: 5,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    tituloBanner: {
        color: "#fff",
        fontSize: 11,
        fontFamily: font

    },

})

export default styles;