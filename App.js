import { View, Text, FlatList, TextInput, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinItems from "./components/CoinItems";
import appStyles from "./styles/app.styles";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadInfo = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = response.data;
    //console.log(data);
    setCoins(data);
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <View style={appStyles.container}>
      <StatusBar backgroundColor="blue" />
      <View style={appStyles.header}>
        <Text style={appStyles.title}>Cryptocurrencies</Text>
        <TextInput
          style={appStyles.search}
          placeholder="Search..."
          placeholderTextColor="#B8860B"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        style={appStyles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => {
          return <CoinItems coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadInfo();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

export default App;
