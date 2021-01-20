import React, {ReactElement} from "react";
import {View} from "react-native";
import global from "../../../global";
import {colors, metrics} from "../../../theme";

interface CryptoItemProps {
  symbol: string;
  id: string;
}

function CryptoItem({symbol, id}: CryptoItemProps): ReactElement {
  return (
    <View
      style={{
        borderRadius: 5,
        marginVertical: metrics.smallMargin - 3,
        borderWidth: 1,
        borderColor: colors.darkGrey,
        padding: metrics.smallMargin,
        backgroundColor: `${colors.lightGray}20`,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <global.Text>{symbol}</global.Text>
      </View>
    </View>
  );
}

export default CryptoItem;
