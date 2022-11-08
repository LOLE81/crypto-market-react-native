import { StyleSheet } from "react-native";

const componentStyles = StyleSheet.create({
  containerItem: {
    backgroundColor: "gold",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinName: {
    flexDirection: "row",
  },
  containerNames: {
    marginLeft: 10,
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 2,
  },
  text: {
    color: "#0000FF",
  },
  price: {
    color: "#0000FF",
    textAlign: "right",
    marginRight: 2,
  },
  symbol: {
    color: "#6495ED",
    textTransform: "uppercase",
  },
  pricePercentage: {
    color: "white",
    textAlign: "right",
    marginRight: 2,
  },
  positives: {
    color: "green",
  },
  negatives: {
    color: "red",
  },
});

export default componentStyles;
