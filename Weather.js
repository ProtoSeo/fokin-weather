import React from "react";
import propTypes from "prop-types";
import {View ,Text, StyleSheet,StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"]
    }
}


export default function Weather({temp, condition}){
    return <LinearGradient
            colors={weatherOptions["Haze"].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size = {96} name={weatherOptions["Haze"].iconName} color = "white"/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}/>
        </LinearGradient>;
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
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})