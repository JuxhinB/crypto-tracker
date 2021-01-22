import React, {createContext, ReactElement, useState} from "react";
import {CryptoData} from "../../Types";

interface CryptoDetailsProviderProps {
  children: ReactElement;
  details: CryptoData;
}

interface CryptoDetailsContextProps {}

const CRYPTO_DETAILS_CONTEXT_INITIAL_VALUES = {};

export const CryptoDetailsContext = createContext<CryptoDetailsContextProps>(
  CRYPTO_DETAILS_CONTEXT_INITIAL_VALUES,
);

function CryptoDetailsProvider({
  children,
  details,
}: CryptoDetailsProviderProps): ReactElement {
  const providerValue = {};

  return (
    <CryptoDetailsContext.Provider value={providerValue}>
      {children}
    </CryptoDetailsContext.Provider>
  );
}

export default CryptoDetailsProvider;
