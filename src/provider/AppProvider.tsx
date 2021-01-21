import React, {createContext, Dispatch, ReactElement, useState} from "react";
// import {View} from 'react-native';

interface AppProviderProps {
  children: ReactElement;
}

interface AppContextProps {
  activeHomeTab: string;
  setActiveHomeTab: Dispatch<string>;
}

const APP_CONTEXT_INITIAL_VALUES = {
  activeHomeTab: "",
  setActiveHomeTab: (arg: string) => undefined,
};

export const AppContext = createContext<AppContextProps>(
  APP_CONTEXT_INITIAL_VALUES,
);

function AppProvider({children}: AppProviderProps): ReactElement {
  const [activeHomeTab, setActiveHomeTab] = useState<string>("");

  const providerValue = {
    activeHomeTab,
    setActiveHomeTab,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
