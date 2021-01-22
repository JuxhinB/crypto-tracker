import React, {ReactElement, useContext, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import module from "../module";
import {colors, metrics} from "../theme";
import {View, TouchableOpacity} from "react-native";
import {AppContext} from "../provider";
import global from "../global";
import _string from "../localization/_string";
import {v4 as uuid} from "uuid";

interface NavigationItem {
  route: string;
  icon: string;
  iconTint?: string;
  label: string;
}

const bottomTabsConfig: NavigationItem[] = [
  {
    route: "CryptoList",
    icon: "home",
    label: _string.SCREENS.home,
  },
  {
    route: "Search",
    icon: "search",
    label: _string.SCREENS.search,
  },
];

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
        }}
        tabBar={(props) => <CustomTabBar {...props} />}>
        <Screen name="CryptoList" component={module.cryptoList.Layout} />
        <Screen name="Search" component={module.search.Layout} />
        <Screen
          name="CryptoDetails"
          component={module.cryptoDetails.Layout}
          options={{
            tabBarVisible: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default NavigationWrap;

function CustomTabBar({navigation}: any) {
  const {activeHomeTab, setActiveHomeTab} = useContext(AppContext);

  useEffect(() => {
    setActiveHomeTab(bottomTabsConfig[0].route);
  }, []);

  return activeHomeTab === "CryptoDetails" ? (
    <></>
  ) : (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.darkerGrey,
        height: metrics.navBarHeight,
        zIndex: 1,
      }}>
      {bottomTabsConfig.map((item: NavigationItem) => (
        <TouchableOpacity
          key={uuid()}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: 7,
            width: 70,
          }}
          onPress={() => {
            setActiveHomeTab(item.route);
            navigation.navigate(item.route);
          }}>
          <Icon
            name={item.icon}
            size={24}
            color={
              activeHomeTab === item.route
                ? colors.white
                : `${colors.lightGray}95`
            }
          />
          <global.Text
            style={{
              fontSize: 10,
              textAlign: "center",
              marginTop: 3,
              color:
                activeHomeTab === item.route
                  ? colors.white
                  : `${colors.lightGray}95`,
            }}>
            {item.label}
          </global.Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
