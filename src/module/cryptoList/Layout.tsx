import React, {ReactElement, useContext, useEffect} from "react";
import RootLayout from "../../RootLayout";
import CryptoListProvider from "./CryptoListProvider";
import comp from "./components";
import {AppContext} from "../../provider";

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
        <comp.CryptoScrollView />
      </CryptoListProvider>
    </RootLayout>
  );
}

export default Layout;
