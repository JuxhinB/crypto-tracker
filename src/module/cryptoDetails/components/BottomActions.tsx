import React, {ReactElement, useContext} from "react";
import {View, TouchableOpacity} from "react-native";
import _string from "../../../localization/_string";
import {colors, metrics} from "../../../theme";
import global from "../../../global";
import {UserContext} from "../../../provider";
import {CryptoDetailsContext} from "../CryptoDetailsProvider";
import {useNavigation} from "@react-navigation/native";

function BottomActions(): ReactElement {
  let navigation = useNavigation();
  const {removeCoin} = useContext(UserContext);
  const {details} = useContext(CryptoDetailsContext);

  return details ? (
    <View
      style={{
        width: "100%",
        paddingHorizontal: metrics.baseMargin,
        marginBottom: metrics.baseMargin,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: colors.darkerGrey,
          padding: metrics.baseMargin,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.goBack();
          removeCoin(details.symbol);
        }}>
        <global.Text>{_string.ACTIONS.remove}</global.Text>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
}

export default BottomActions;
