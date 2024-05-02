import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(220, 180, 240, 0.4)",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  btnContainer: {
    position: "absolute",
    top: -250,
    right: -240,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
