import { StyleSheet } from "react-native";
import { font } from "../../helpers/fonts";



const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },

  title: {
    color: '#fff',
     fontFamily: font,
     fontSize: 18,
     
  },

  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  img: {
    width: 130,
    height: 130,
    marginStart: 140
  },

  icone: {
    marginEnd: 15
  },

  

  containerCards: {
   
    width: 300,
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap"
    

  },

 container: {
    alignItems: "center"
  }
  
})

export default styles;