import React, {ReactElement, useContext, useEffect} from "react";
import RootLayout from "../../RootLayout";
import CryptoListProvider from "./CryptoListProvider";
import comp from "./components";
import {AppContext} from "../../provider";
import {View} from "react-native";
import {metrics} from "../../theme";
import _string from "../../localization/_string";

interface LayoutProps {
  navigation: any;
}

function Layout({navigation}: LayoutProps): ReactElement {
  const {setActiveHomeTab} = useContext(AppContext);

  useEffect(() => {
    const event = navigation.addListener("focus", () => {
      setActiveHomeTab("CryptoList");
    });

    return () => {
      event;
    };
  }, []);

  return (
    <RootLayout>
      <CryptoListProvider>
        <View
          style={{
            flex: 1,
            paddingTop: metrics.baseMargin,
            paddingBottom: metrics.smallMargin,
          }}>
          <comp.CryptoScrollView />
        </View>
      </CryptoListProvider>
    </RootLayout>
  );
}

export default Layout;
