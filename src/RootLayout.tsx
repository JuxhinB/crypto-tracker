import React, {ReactElement} from "react";
import {StatusBar, SafeAreaView} from "react-native";
import {AppProvider, UserProvider} from "./provider";

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
              paddingTop: 40,
              backgroundColor: "#222222",
            }}>
            {children}
          </SafeAreaView>
        </>
      </UserProvider>
    </AppProvider>
  );
}

export default RootLayout;
