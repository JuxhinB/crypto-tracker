import React, {ReactElement, useCallback, useContext, useState} from "react";
import {View, TextInput, ActivityIndicator} from "react-native";
import _string from "../../../localization/_string";
import {colors, fonts, metrics} from "../../../theme";
import Toast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {fetchApi} from "../../../core/Api";
import {AxiosError, AxiosResponse} from "axios";
import {CryptoResponse} from "../../../Types";
import {UserContext} from "../../../provider";

let typingTimer: any;
let doneTypingInterval = 500;

function SearchBox(): ReactElement {
  const {getList} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCryptoData = useCallback(
    (symbol: string) => {
      setIsLoading(true);
      fetchApi({
        method: "GET",
        fullUrl: `https://data.messari.io/api/v1/assets/${symbol}/metrics`,
      })
        .then(async (r: AxiosResponse<CryptoResponse>) => {
          if (r.status === 200) {
            let rawItems = await AsyncStorage.getItem("cryptoList");
            let items = JSON.parse(rawItems as string);
            items.push(symbol);
            await AsyncStorage.setItem("cryptoList", JSON.stringify(items));
            Toast.show(_string.MESSAGES.crypto_currency_added);
            getList();
          }
        })
        .catch((e: AxiosError) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setIsLoading],
  );

  function handleTextChange(text: string) {
    if (text) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(async () => {
        let rawList = await AsyncStorage.getItem("cryptoList");

        let list: string[] = JSON.parse(rawList as string);

        let shouldAddItem = true;
        list.forEach((item) => {
          if (item == text.toLowerCase()) {
            shouldAddItem = false;
            Toast.show(_string.MESSAGES.crypto_currency_exists);
          }
        });

        if (shouldAddItem) {
          getCryptoData(text.toLowerCase());
        }
      }, doneTypingInterval);
    }
  }

  return (
    <View
      style={{
        width: "100%",
        marginTop: metrics.baseMargin,
      }}>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}>
          <ActivityIndicator size="small" color={`${colors.white}80`} />
        </View>
      )}
      <TextInput
        style={{
          fontSize: fonts.size.h5,
          color: colors.white,
          backgroundColor: colors.darkerGrey,
          borderRadius: 5,
        }}
        placeholderTextColor={colors.lightGray}
        placeholder={_string.LABELS.search_box_example}
        onChangeText={(text) => {
          handleTextChange(text);
        }}
      />
    </View>
  );
}

export default SearchBox;
