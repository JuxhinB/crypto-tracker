import React, {createContext, ReactElement, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectIsValidUser,
  selectUserProfile,
  UserSliceState,
  UserProfile,
} from "../reducer/userSlice";

interface UserProviderProps {
  children: ReactElement;
}

interface UserContextProps {}

const USER_CONTEXT_INITIAL_VALUES = {};

export const UserContext = createContext<UserContextProps>(
  USER_CONTEXT_INITIAL_VALUES,
);

function UserProvider({children}: UserProviderProps): ReactElement {
  const isValidUser = useSelector<UserSliceState, boolean>(selectIsValidUser);
  const user = useSelector<UserSliceState, UserProfile>(selectUserProfile);
  const providerValue = {};

  // useEffect(() => {
  // }, []);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
