import React from "react";
import propTypes from "prop-types";
import {View ,Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather({temp, condition}){
    return <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size = {96} name="weather-lightning-rainy"/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.halfContainer}/>

    </View>;
}

Weather.propTypes = {
    temp:propTypes.number.isRequired,
    condition:propTypes.oneOf(["Dust","Thunderstorm","Drizzle","Rain","Snow","Atomosphere","Clear","Clouds","Haze","Mist"]).isRequired
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})