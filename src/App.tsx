import React, {useEffect} from "react";
import {Provider} from "react-redux";
import SplashScreen from "react-native-splash-screen";
import navigation from "./navigation";
import store from "./store/store";
import {AppProvider, UserProvider} from "./provider";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppProvider>
        <UserProvider>
          <navigation.NavigationWrap />
        </UserProvider>
      </AppProvider>
    </Provider>
  );
}

export default App;
