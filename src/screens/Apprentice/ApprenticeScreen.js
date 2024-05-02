import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import data from "../../data/myData.json";
import styles from "./styles";

export default function ApprenticeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.png")}
        imageStyle={styles.containerImage}
      >
        <Text style={styles.infoText}>{data.evidence}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: data.image }} />
        </View>
        <Text style={styles.infoRecipeName}>Aprendiz: {data.apprentice}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Instructor: {data.instructor}</Text>
          <ImageBackground
            source={require("../../../assets/Sena_Colombia_logo.svg.png")}
            imageStyle={styles.backgroundImage}
          >
            <Text style={styles.infoText}>{data.program}</Text>
            <Text style={styles.infoText}>{data.group}</Text>
            <Text style={styles.infoText}>{data.trainingInstitution}</Text>
            <Text style={styles.infoText}>{data.trainingCenter}</Text>
            <Text style={styles.infoText}>{data.region}</Text>
          </ImageBackground>
          <Text style={styles.infoText}>{data.year}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
