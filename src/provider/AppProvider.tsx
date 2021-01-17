import React, {createContext, ReactElement} from "react";
// import {View} from 'react-native';

interface AppProviderProps {
  children: ReactElement;
}

interface AppContextProps {}

const APP_CONTEXT_INITIAL_VALUES = {};

export const AppContext = createContext<AppContextProps>(
  APP_CONTEXT_INITIAL_VALUES,
);

function AppProvider({children}: AppProviderProps): ReactElement {
  const providerValue = {};

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
