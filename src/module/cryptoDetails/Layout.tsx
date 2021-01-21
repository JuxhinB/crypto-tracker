import React, {ReactElement, useContext, useEffect} from "react";
import {View} from "react-native";
import {AppContext} from "../../provider";
import RootLayout from "../../RootLayout";

function Layout(): ReactElement {
  const {setActiveHomeTab} = useContext(AppContext);

  useEffect(() => {
    setActiveHomeTab("CryptoDetails");
  }, []);

  return (
    <RootLayout>
      <View></View>
    </RootLayout>
  );
}

export default Layout;
