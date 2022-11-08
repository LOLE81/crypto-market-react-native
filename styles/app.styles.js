import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    backgroundColor: "#00008B",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "#B8860B",
    marginTop: 20,
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    width: "90%",
  },
  search: {
    color: "#B8860B",
    borderBottomColor: "yellow",
    borderBottomWidth: 1,
    width: "30%",
    textAlign: "center",
    textAlignVertical: "bottom",
    paddingBottom: 3,
  },
});

export default appStyles;
