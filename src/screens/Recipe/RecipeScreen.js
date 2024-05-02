import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { getCategoryName } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";

export default function RecipeScreen(props) {
  const { navigation, route } = props;
  const item = route.params?.item;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.photo_url }} />
          </View>
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)?.toUpperCase()}
          </Text>
        </View>

        {item.type === "food" && (
          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require("../../../assets/icons/time.png")}
            />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
