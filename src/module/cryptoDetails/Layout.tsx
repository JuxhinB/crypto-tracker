import React, {ReactElement, useContext, useEffect} from "react";
import {ScrollView} from "react-native";
import {AppContext} from "../../provider";
import RootLayout from "../../RootLayout";
import {metrics} from "../../theme";
import {CryptoData} from "../../Types";
import CryptoDetailsProvider from "./CryptoDetailsProvider";
import comp from "./components";

function Layout({route, navigation}: any): ReactElement {
  const {details} = route.params;
  const {setActiveHomeTab} = useContext(AppContext);

  useEffect(() => {
    setActiveHomeTab("CryptoDetails");
  }, []);

  return (
    <RootLayout>
      <CryptoDetailsProvider details={(details as CryptoData) ?? {}}>
        <ScrollView
          style={{
            marginTop: metrics.baseMargin,
            flex: 1,
          }}>
          <comp.GeneralInfo />
          <comp.RoiData />
          <comp.BottomActions />
        </ScrollView>
      </CryptoDetailsProvider>
    </RootLayout>
  );
}

export default Layout;
