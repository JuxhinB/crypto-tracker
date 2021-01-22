import React, {ReactElement} from "react";
import {View} from "react-native";
import RootLayout from "../../RootLayout";
import {metrics} from "../../theme";
import comp from "./components";

function Layout(): ReactElement {
  return (
    <RootLayout>
      <View style={{flex: 1, padding: metrics.baseMargin}}>
        <comp.SearchBox />
      </View>
    </RootLayout>
  );
}

export default Layout;
