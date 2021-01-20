import React, {ReactElement} from "react";
import RootLayout from "../../RootLayout";
import CryptoListProvider from "./CryptoListProvider";
import comp from "./components";
import {View} from "react-native";
import {metrics} from "../../theme";

function Layout(): ReactElement {
  return (
    <RootLayout>
      <CryptoListProvider>
        <View
          style={{
            flex: 1,
            padding: metrics.baseMargin,
          }}>
          <comp.CryptoScrollView />
        </View>
      </CryptoListProvider>
    </RootLayout>
  );
}

export default Layout;
