import { StyleSheet } from "react-native";
import font from '../../helpers/fonts'

const styles = StyleSheet.create({


    navBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:'100%',
        height:'25%'
    },

    
    iconeLogo: {
        marginTop: '2%',
        height: 35,
        marginLeft: 20,
        zIndex: 1
        
    },
    
    iconePerfil: {
        marginRight: 10,
        zIndex: 1
    },
    
    iconeBusca: {
        color: 'white',
        marginStart:250,
        zIndex: 1
    },
    
    navbarItens: {
        position: "absolute",
        bottom:0,
        flexDirection: "row",
        
    },
    
    navBarItem: {
        color: 'white',
        fontSize: 16,
        fontFamily: font,
        paddingLeft:55
    },

   
});

export default styles;