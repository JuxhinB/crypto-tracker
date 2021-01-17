import React, {ReactElement} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import module from "../module";

const {Navigator, Screen} = createBottomTabNavigator();

function NavigationWrap(): ReactElement {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="CryptoList"
        tabBarOptions={{
          style: {
            backgroundColor: "#191919",
            paddingVertical: 3,
          },
        }}>
        <Screen name="CryptoList" component={module.cryptoList.Layout} />
        <Screen name="Profile" component={module.profile.Layout} />
        <Screen name="CryptoDetails" component={module.cryptoDetails.Layout} />
        <Screen
          name="BookmarkedCryptoList"
          component={module.bookmarkedCryptoList.Layout}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrap;
