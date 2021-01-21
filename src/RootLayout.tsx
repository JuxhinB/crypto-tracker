import React, {ReactElement} from "react";
import {StatusBar, SafeAreaView} from "react-native";
import {color} from "react-native-reanimated";
import {AppProvider, UserProvider} from "./provider";
import {colors} from "./theme";

interface RootLayoutProps {
  children: ReactElement;
}

function RootLayout({children}: RootLayoutProps): ReactElement {
  return (
    <AppProvider>
      <UserProvider>
        <>
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor={"#00000050"}
          />
          <SafeAreaView
            style={{
              flexGrow: 1,
              paddingTop: 10,
              backgroundColor: colors.darkGrey,
            }}>
            {children}
          </SafeAreaView>
        </>
      </UserProvider>
    </AppProvider>
  );
}

export default RootLayout;
