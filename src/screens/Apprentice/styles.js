import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  containerImage: {
    flex: 1,
    alignItems: "center",
    width: viewportWidth,
    height: 100,
    opacity: 0.9,
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    width: viewportWidth,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoRecipeName: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  infoText: {
    textAlign: "center",
    fontSize: 14,
    margin: 12,
  },
  backgroundImage: {
    opacity: 0.1,
    width: 300,
    height: 300,
    marginLeft: 40,
    resizeMode: "contain",
  },
});

export default styles;
