import { StyleSheet } from "react-native";
import { font } from "../../helpers/fonts";



const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 8,
    marginLeft: 30,
    
    
  },

  img:{
    width: 100,
    height: 100,
    borderRadius: 5
    
  },

  subtitle: {
    color: '#fff',
    textAlign: "center",
    fontSize: 12
  }
})

export default styles;