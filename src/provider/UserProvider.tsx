import React, {createContext, ReactElement} from "react";

interface UserProviderProps {
  children: ReactElement;
}

interface UserContextProps {}

const USER_CONTEXT_INITIAL_VALUES = {};

export const UserContext = createContext<UserContextProps>(
  USER_CONTEXT_INITIAL_VALUES,
);

function UserProvider({children}: UserProviderProps): ReactElement {
  const providerValue = {};

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
