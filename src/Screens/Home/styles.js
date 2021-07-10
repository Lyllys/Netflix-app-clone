import { StyleSheet } from "react-native";
import font from '../../helpers/fonts'

const styles = StyleSheet.create({
    banner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    
   container: {
         flexDirection: "row",
         justifyContent:"center"
     },

     containerMinhaLista: {
         top: -20,
         bottom: 0,
         right:90,
         alignItems: "center"

     },

     tituloMenu: {
         fontSize: 10,
         color: "#fff",
         fontFamily: font
     },

     btn: {
         width: 120,
         height:38,
         backgroundColor: 'white',
         position: 'absolute',
         top: -20,
         bottom: 0,
         borderRadius: 3,
         flexDirection:"row",
         alignItems: "center",
         justifyContent: "center",
         borderColor: 'black'
     },

    tituloBtn: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"


    },

     containerSaibaMais: {
         top: -20,
         bottom: 0,
         left:90,
         alignItems: "center"
     },


});

export default styles;