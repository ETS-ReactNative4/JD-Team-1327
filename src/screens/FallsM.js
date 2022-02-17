import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking, Image, Platform } from "react-native";
import {WebView} from "react-native-webview";
import MainButton from "../components/MainButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import fallsources from "../assets/fall-sources.png";

export default function FallSources({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToFalls = () => {
        navigation.navigate("Falls");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <Text style={styles.title}> Fall Sources: </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=accident-statistics-90-P02853#:~:text=Injury%20is%20the%20leading%20cause,of%20nonfatal%20injury%20for%20children')}>
         <Text style={styles.link}> [1] Stanford Children Accident Statistics </Text>
    </TouchableOpacity>

    <MainButton
          text="Go to Falls"
          onPress={goToFalls}
          txtColor={"black"}
    ></MainButton>

    <MainButton
          text="Back to Sources"
          onPress={backToSources}
          txtColor={"black"}
    ></MainButton>
    </View>

    <View style = {styles.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    srcimg: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 5,
        right: 0,
    },
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline"
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
    },
    link: {
        textDecorationLine:'underline',
        color:'blue'
    },
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
    },
});