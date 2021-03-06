import {AxiosError, AxiosResponse} from "axios";
import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {ActivityIndicator, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import {fetchApi} from "../../../core/Api";
import global from "../../../global";
import {colors, fonts, metrics} from "../../../theme";
import {CryptoResponse, CryptoData} from "../../../Types";
import {AppContext} from "../../../provider";
import _string from "../../../localization/_string";
import {CryptoListContext} from "../CryptoListProvider";

interface CryptoItemProps {
  symbol: string;
  id: string;
  color: string;
}

function CryptoItem({symbol, id, color}: CryptoItemProps): ReactElement {
  const navigation = useNavigation();
  const {setActiveHomeTab} = useContext(AppContext);
  const {reloadData} = useContext(CryptoListContext);
  const [coinDetails, setCoinDetails] = useState<CryptoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCryptoData = useCallback(() => {
    setIsLoading(true);
    fetchApi({
      method: "GET",
      fullUrl: `https://data.messari.io/api/v1/assets/${symbol}/metrics`,
    })
      .then((r: AxiosResponse<CryptoResponse>) => {
        if (r.status === 200) {
          // console.log(r.data.data);
          setCoinDetails(r.data.data);
        }
      })
      .catch((e: AxiosError) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  useEffect(() => {
    getCryptoData();
  }, [reloadData]);

  return (
    <TouchableOpacity
      style={{
        borderRadius: 5,
        marginVertical: metrics.smallMargin - 3,
        padding: metrics.smallMargin,
        backgroundColor: `#2d2d2d`,
        overflow: "hidden",
        borderLeftWidth: 1,
        borderColor: `${color}80`,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
      onPress={() => {
        if (coinDetails) {
          navigation.navigate("CryptoDetails", {details: coinDetails});
        } else {
          Toast.show(_string.MESSAGES.cannot_load_crypto_details);
        }
        setActiveHomeTab("CryptoDetails");
      }}>
      <View
        style={{
          flex: 1,
          height: 100,
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
        {/* Static Crypto Name */}
        <global.Text
          style={{
            position: "absolute",
            left: -10,
            bottom: -40,
            fontSize: fonts.size.h1 + 60,
            fontFamily: fonts.type.emphasisItalic,
            color: `${colors.white}08`,
          }}>
          {symbol}
        </global.Text>
        {/* End Static Crypto Name */}

        {/* Loader */}
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="small" color={`${colors.white}80`} />
          </View>
        ) : (
          <>
            {/* End Loader */}

            {coinDetails && (
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                  }}>
                  <global.Text
                    style={{
                      fontSize: fonts.size.h2,
                      color: `${colors.white}98`,
                    }}>
                    {coinDetails?.name}
                  </global.Text>

                  <global.Text
                    style={{
                      fontSize: fonts.size.medium,
                      color: `${colors.white}96`,
                    }}>
                    {coinDetails?.market_data.price_usd
                      ? `$ ${coinDetails?.market_data.price_usd.toFixed(3)}`
                      : ""}
                  </global.Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}>
                  <global.Text
                    style={{
                      color:
                        coinDetails?.market_data
                          .percent_change_usd_last_24_hours < 0
                          ? `${colors.red}98`
                          : `${colors.green}98`,
                      fontSize: fonts.size.h6,
                    }}>
                    {coinDetails?.market_data.percent_change_usd_last_24_hours
                      ? coinDetails?.market_data.percent_change_usd_last_24_hours.toFixed(
                          2,
                        )
                      : ""}
                  </global.Text>

                  <global.Text
                    style={{
                      fontSize: fonts.size.medium,
                      color: `${colors.white}96`,
                    }}>
                    {coinDetails?.marketcap.marketcap_dominance_percent
                      ? `${coinDetails?.marketcap.marketcap_dominance_percent.toFixed(
                          1,
                        )}%`
                      : ""}
                  </global.Text>
                </View>
              </>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default CryptoItem;
