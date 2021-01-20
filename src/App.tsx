import React, {useEffect} from "react";
import {Provider} from "react-redux";
import SplashScreen from "react-native-splash-screen";
import navigation from "./navigation";
import store from "./store/store";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <navigation.NavigationWrap />
    </Provider>
  );
}

export default App;
