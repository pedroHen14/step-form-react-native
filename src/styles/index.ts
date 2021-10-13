import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight
  },
  input: {
    width: "90%",
    height: 50,
    marginBottom: 12,
  }
})