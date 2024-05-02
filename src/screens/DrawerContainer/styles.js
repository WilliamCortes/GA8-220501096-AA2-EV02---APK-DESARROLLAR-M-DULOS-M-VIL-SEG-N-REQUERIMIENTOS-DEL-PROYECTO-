import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  btnContainer: {
    position: "absolute",
    top: -280,
    right: -240,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
