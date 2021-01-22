import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import {useSelector} from "react-redux";
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
}

const USER_CONTEXT_INITIAL_VALUES = {
  cryptoList: [],
  getList: () => undefined,
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
      return;
    }

    setCryptoList(list);
  }, []);

  useEffect(() => {
    getList();
  }, []);

  const providerValue = {
    cryptoList,
    getList,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
