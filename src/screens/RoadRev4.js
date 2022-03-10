import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker } from "react-native";
import MainButton from "../components/MainButton";
import QuizButton from "../components/QuizButton";
import MediaButton from "../components/MediaButton";
import RevButton from "../components/RevButton";
import BackButton from "../components/BackButton";
import { get } from "../Db";
import Background from "../assets/bg.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function RoadRev4({ navigation }) {
  //NAV CALLBACK
  const goHome = () => {
    navigation.pop();
  };
  const backToReview = () => {
    navigation.navigate("Review");
  };
  const nextQ = () => {
    navigation.navigate("RoadRev5");
  };
  const goToInfo = () => {
    navigation.navigate("Traffic");
  };

  return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={styles.btns}>
        <MediaButton
              text="Back to Review"
              onPress={backToReview}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={nextQ}
        ></BackButton>
    </View>

    <Text style={styles.title}> Question 4 </Text>
    <Text> {'\n'} </Text>
    <Text style={styles.subtitle}> What should you not do when kids are in the car? </Text>

    <View style={styles.buttonContainer}>
    <QuizButton
      text="Be a good role model"
    ></QuizButton>
    <QuizButton
      text="Be consistent"
    ></QuizButton>
    <QuizButton
      text="Leave your child alone"
    ></QuizButton>
    <QuizButton
      title="correct"
      text="Use a broken car seat"
    ></QuizButton>
    </View>

    <View style={styles.container}>
    <MainButton
        text="Go to Car Safety"
        onPress={goToInfo}
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
    btns: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
  title: {
    // margin: 100,
    //height: 70,
    fontSize: 40,
    marginTop: 0,
    //marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline"
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 75,
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