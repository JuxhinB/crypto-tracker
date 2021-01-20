import React, {ReactElement, useContext, useEffect, useState} from "react";
import {FlatList, View, Text} from "react-native";
import {v4 as uuid} from "uuid";
import {CryptoListContext} from "../CryptoListProvider";
import comp from "./";

interface FormattedCryptoList {
  symbol: string;
  id: string;
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
        });
      });

      setFormattedCryptoList(tempList);
    }
  }, [cryptoList]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={formattedCryptoList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          // <Text>{item.symbol}</Text>
          <comp.CryptoItem symbol={item.symbol} id={item.id} />
        )}
      />
    </View>
  );
}

export default CryptoScrollView;
