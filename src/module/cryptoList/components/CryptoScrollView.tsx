import React, {ReactElement, useContext, useEffect, useState} from "react";
import {FlatList, View, Text} from "react-native";
import {v4 as uuid} from "uuid";
import {metrics} from "../../../theme";
import {CryptoListContext} from "../CryptoListProvider";
import comp from "./";

interface FormattedCryptoList {
  symbol: string;
  id: string;
  color: string;
}

function CryptoScrollView(): ReactElement {
  const {cryptoList} = useContext(CryptoListContext);
  const [formattedCryptoList, setFormattedCryptoList] = useState<
    FormattedCryptoList[]
  >([]);

  useEffect(() => {
    if (cryptoList) {
      let tempList: FormattedCryptoList[] = [];
      cryptoList.forEach((item) => {
        tempList.push({
          symbol: item,
          id: uuid(),
          color: getRandomColor(),
        });
      });

      setFormattedCryptoList(tempList);
    }
  }, [cryptoList]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{padding: metrics.baseMargin}}
        data={formattedCryptoList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <comp.CryptoItem
            symbol={item.symbol}
            id={item.id}
            color={item.color}
          />
        )}
      />
    </View>
  );
}

export default CryptoScrollView;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
