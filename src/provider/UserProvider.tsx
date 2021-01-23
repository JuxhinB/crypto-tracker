import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import {useSelector} from "react-redux";
import _string from "../localization/_string";
import Toast from "react-native-simple-toast";
import {
  selectIsValidUser,
  selectUserProfile,
  UserSliceState,
  UserProfile,
} from "../reducer/userSlice";

interface UserProviderProps {
  children: ReactElement;
}

interface UserContextProps {
  cryptoList: string[];
  getList: () => void;
  removeCoin: (symbol: string) => void;
}

const USER_CONTEXT_INITIAL_VALUES = {
  cryptoList: [],
  getList: () => undefined,
  removeCoin: (symbol: string) => undefined,
};

export const UserContext = createContext<UserContextProps>(
  USER_CONTEXT_INITIAL_VALUES,
);

function UserProvider({children}: UserProviderProps): ReactElement {
  const isValidUser = useSelector<UserSliceState, boolean>(selectIsValidUser);
  const user = useSelector<UserSliceState, UserProfile>(selectUserProfile);

  const [cryptoList, setCryptoList] = useState<string[]>([]);

  const getList = useCallback(async () => {
    let rawList = await AsyncStorage.getItem("cryptoList");
    let list = JSON.parse(rawList as string);

    if (!rawList || (list && !list.length)) {
      await AsyncStorage.setItem("cryptoList", JSON.stringify([]));
      setCryptoList([]);
      return;
    }

    setCryptoList(list);
  }, []);

  useEffect(() => {
    getList();
  }, []);

  async function removeCoin(symbol: string) {
    let rawItems = await AsyncStorage.getItem("cryptoList");
    let items = JSON.parse(rawItems as string);

    items = items.filter((item: string) => item !== symbol.toLowerCase());

    await AsyncStorage.setItem("cryptoList", JSON.stringify(items));
    Toast.show(_string.MESSAGES.crypto_currency_removed);

    getList();
  }

  const providerValue = {
    cryptoList,
    getList,
    removeCoin,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
