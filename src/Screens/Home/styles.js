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

     containerSaibaMais: {
         top: -20,
         bottom: 0,
         left:90,
         alignItems: "center"
     },


});

export default styles;