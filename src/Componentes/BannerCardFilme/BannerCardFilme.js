import React from "react";
import { View,  Image} from "react-native";
import styles from "./styles";

const BannerCardFilme = ({bannerFilme}) => {
    return (
        <View style={{backgroundColor: 'purple'}}>
            
            
               
                <View style={styles.container}>
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    <Image source={bannerFilme} style={styles.img} />
                    </View>

        </View>

    )
};

export default BannerCardFilme;