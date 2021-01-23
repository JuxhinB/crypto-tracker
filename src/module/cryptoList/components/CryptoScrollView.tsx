import React, {ReactElement, useContext, useEffect, useState} from "react";
import {FlatList, RefreshControl, View} from "react-native";
import {v4 as uuid} from "uuid";
import _string from "../../../localization/_string";
import {colors, fonts, metrics} from "../../../theme";
import {CryptoListContext} from "../CryptoListProvider";
import comp from "./";
import global from "../../../global";
import {UserContext} from "../../../provider";

interface FormattedCryptoList {
  symbol: string;
  id: string;
  color: string;
}

function CryptoScrollView(): ReactElement {
  const {cryptoList} = useContext(UserContext);
  const {setReloadData} = useContext(CryptoListContext);
  const [formattedCryptoList, setFormattedCryptoList] = useState<
    FormattedCryptoList[]
  >([]);

  useEffect(() => {
    console.log(cryptoList);
    if (cryptoList) {
      setList();
    }
  }, [cryptoList]);

  function setList() {
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
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{
          paddingHorizontal: metrics.baseMargin,
          flex: 1,
        }}
        data={formattedCryptoList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <comp.CryptoItem
            symbol={item.symbol}
            id={item.id}
            color={item.color}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setReloadData(new Date());
            }}
          />
        }
        ListEmptyComponent={
          <global.Text
            style={{
              paddingVertical: metrics.doubleBaseMargin,
              color: colors.lightGray,
              fontSize: fonts.size.h5,
              textAlign: "center",
            }}>
            {_string.MESSAGES.no_coin_selected}
          </global.Text>
        }
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
