import React, {createContext, ReactElement, useState} from "react";
import staticCryptoList from "../../config/cryptoCurrenciesList";

interface CryptoListProviderProps {
  children: ReactElement;
}

interface CryptoListContextProps {
  cryptoList: string[];
}

const CRYPTO_LIST_CONTEXT_INITIAL_VALUES = {
  cryptoList: staticCryptoList,
};

export const CryptoListContext = createContext<CryptoListContextProps>(
  CRYPTO_LIST_CONTEXT_INITIAL_VALUES,
);

function CryptoListProvider({children}: CryptoListProviderProps): ReactElement {
  const [cryptoList, setCryptoList] = useState<string[]>(staticCryptoList);

  const providerValue = {
    cryptoList,
  };

  return (
    <CryptoListContext.Provider value={providerValue}>
      {children}
    </CryptoListContext.Provider>
  );
}

export default CryptoListProvider;
