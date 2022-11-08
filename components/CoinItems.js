import { View, Text, Image } from "react-native";
import React from "react";
import componentStyles from "../styles/components.styles";

const CoinItems = ({ coin }) => {
  return (
    <View style={componentStyles.containerItem}>
      <View style={componentStyles.coinName}>
        <Image style={componentStyles.image} source={{ uri: coin.image }} />
        <View style={componentStyles.containerNames}>
          <Text style={componentStyles.text}>{coin.name}</Text>
          <Text style={componentStyles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={componentStyles.price}>$ {coin.current_price}</Text>
        <Text
          style={[
            componentStyles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? componentStyles.positives
              : componentStyles.negatives,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

export default CoinItems;
