import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, Image } from "react-native";
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
      <Text style={styles.infoDescriptionRecipe}>{data.evidence}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: data.image }} />
      </View>
      <Text style={styles.infoRecipeName}>Aprendiz: {data.apprentice}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoDescriptionRecipe}>
          Instructor: {data.instructor}
        </Text>
        <Text style={styles.infoDescriptionRecipe}>{data.program}</Text>
        <Text style={styles.infoDescriptionRecipe}>{data.group}</Text>
        <Text style={styles.infoDescriptionRecipe}>
          {data.trainingInstitution}
        </Text>
        <Text style={styles.infoDescriptionRecipe}>{data.trainingCenter}</Text>
        <Text style={styles.infoDescriptionRecipe}>{data.region}</Text>
        <Text style={styles.infoDescriptionRecipe}>{data.year}</Text>
      </View>
    </ScrollView>
  );
}
