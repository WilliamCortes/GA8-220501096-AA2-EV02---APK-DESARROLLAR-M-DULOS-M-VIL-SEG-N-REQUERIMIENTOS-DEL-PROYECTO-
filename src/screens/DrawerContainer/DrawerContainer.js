import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import MenuButton from "../../components/MenuButton/MenuButton";
import styles from "./styles";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigation.closeDrawer()}
          style={styles.btnClickContain}
          underlayColor="rgba(128, 128, 128, 0.1)"
        >
          <View style={styles.btnContainer}>
            <Image
              source={require("../../../assets/icons/close.png")}
              style={styles.btnIcon}
            />
          </View>
        </TouchableHighlight>
        <MenuButton
          title="RECETAS"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Recetas");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PERROS"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Perros");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="APRENDIZ"
          source={require("../../../assets/icons/profile.png")}
          onPress={() => {
            navigation.navigate("Aprendiz");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}
