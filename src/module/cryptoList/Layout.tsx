import React, {ReactElement} from "react";
import RootLayout from "../../RootLayout";
import CryptoListProvider from "./CryptoListProvider";
import comp from "./components";

function Layout(): ReactElement {
  return (
    <RootLayout>
      <CryptoListProvider>
        <comp.CryptoScrollView />
      </CryptoListProvider>
    </RootLayout>
  );
}

export default Layout;
