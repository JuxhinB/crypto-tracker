import React, {createContext, Dispatch, ReactElement, useState} from "react";

interface CryptoListProviderProps {
  children: ReactElement;
}

interface CryptoListContextProps {
  reloadData: Date;
  setReloadData: Dispatch<Date>;
}

const CRYPTO_LIST_CONTEXT_INITIAL_VALUES = {
  reloadData: new Date(),
  setReloadData: (arg: Date) => undefined,
};

export const CryptoListContext = createContext<CryptoListContextProps>(
  CRYPTO_LIST_CONTEXT_INITIAL_VALUES,
);

function CryptoListProvider({children}: CryptoListProviderProps): ReactElement {
  const [reloadData, setReloadData] = useState<Date>(new Date());

  const providerValue = {
    reloadData,
    setReloadData,
  };

  return (
    <CryptoListContext.Provider value={providerValue}>
      {children}
    </CryptoListContext.Provider>
  );
}

export default CryptoListProvider;
