import React, {useEffect} from "react";
import navigation from "./navigation";

import SplashScreen from "react-native-splash-screen";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <navigation.NavigationWrap />;
}

export default App;
