import React, {ReactElement, useContext} from "react";
import {View} from "react-native";
import global from "../../../global";
import _string from "../../../localization/_string";
import {colors, fonts, metrics} from "../../../theme";
import {CryptoDetailsContext} from "../CryptoDetailsProvider";

function GeneralInfo(): ReactElement {
  const {details} = useContext(CryptoDetailsContext);
  return details ? (
    <View style={{width: "100%", marginVertical: metrics.baseMargin}}>
      <global.Text
        style={{
          color: colors.white,
          fontSize: fonts.size.h1,
          marginHorizontal: metrics.baseMargin,
        }}>
        {details.name}
      </global.Text>
      <global.Text
        style={{
          color: colors.white,
          fontSize: fonts.size.h1,
          marginHorizontal: metrics.baseMargin,
        }}>
        {details.symbol}
      </global.Text>

      <View
        style={{
          width: "100%",
          padding: metrics.baseMargin,
        }}>
        <global.Text
          style={{
            fontSize: fonts.size.h5,
            color: `${colors.white}50`,
            zIndex: 1,
            marginBottom: metrics.smallMargin,
          }}>
          {_string.LABELS.price}
        </global.Text>
        <View style={{width: "100%", flexDirection: "row"}}>
          <Item
            value={details?.market_data.price_usd?.toFixed(2)}
            label={"USD"}
          />
          <Item
            value={details?.market_data.price_btc?.toFixed(2)}
            label={"BTC"}
          />
          <Item
            value={details?.market_data.price_eth?.toFixed(2)}
            label={"ETH"}
          />
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}

export default GeneralInfo;

interface ItemProps {
  label: string;
  value: string;
}

function Item({label, value}: ItemProps) {
  return (
    <View
      style={{
        width: "33%",
        paddingHorizontal: metrics.smallMargin - 4,
      }}>
      <View
        style={{
          borderRadius: 5,
          backgroundColor: colors.darkerGrey,
          paddingVertical: metrics.baseMargin,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <global.Text
          style={{
            marginBottom: metrics.smallMargin,
            color: colors.white,
            fontSize: fonts.size.h5,
          }}>
          {value}
        </global.Text>
        <global.Text>{label}</global.Text>
      </View>
    </View>
  );
}
