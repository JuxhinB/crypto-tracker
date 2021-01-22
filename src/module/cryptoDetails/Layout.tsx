import React, {ReactElement, useContext, useEffect} from "react";
import {View} from "react-native";
import {AppContext} from "../../provider";
import RootLayout from "../../RootLayout";
import {CryptoData} from "../../Types";
import CryptoDetailsProvider from "./CryptoDetailsProvider";

function Layout({route, navigation}: any): ReactElement {
  const {details} = route.params;
  const {setActiveHomeTab} = useContext(AppContext);

  useEffect(() => {
    setActiveHomeTab("CryptoDetails");
  }, []);

  return (
    <RootLayout>
      <CryptoDetailsProvider details={details as CryptoData}>
        <View></View>
      </CryptoDetailsProvider>
    </RootLayout>
  );
}

export default Layout;
