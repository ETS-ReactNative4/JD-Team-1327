import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking, Image, Platform } from "react-native";
import {WebView} from "react-native-webview";
import MediaButton from "../components/MediaButton";
import BackButton from "../components/BackButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import win from "../assets/fallsM/window_infographic.jpg";

export default function FallsM0({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }
    const goToFalls = () => {
        navigation.navigate("Falls");
    }
    const FallsM1Nav = () => {
        navigation.navigate("FallsM1");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <Text style={styles.title}> TV Tip-Overs </Text>

<View style={styles.container}>

    <Image style={styles.img} source={win}/>

    <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/i8oifZ7HXaA')}>
         <Text style={styles.link}> Video on the Window Safety </Text>
    </TouchableOpacity>

    <View style={styles.buttons}>

    <MediaButton
          text="Back to Media"
          onPress={backToMedia}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Go to Falls"
          onPress={goToFalls}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Next Page"
          onPress={FallsM1Nav}
          txtColor={"black"}
    ></MediaButton>
    </View>
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
    back: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: "rgba(196,196,196,1)",

        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
        elevation: 7.5,
        position: "absolute",

    },
    img: {
        height: 500,
        width: 395,
    },
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 10,
        marginTop: -50,
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
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
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