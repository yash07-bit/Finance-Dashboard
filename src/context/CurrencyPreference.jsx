import { useEffect, useMemo, useState } from 'react';
import {
  CurrencyPreferenceContext,
  getPreferredCurrency,
  setPreferredCurrency,
  subscribePreferredCurrency,
} from './currencyPreferenceStore';

export function CurrencyPreferenceProvider({ children }) {
  const [currency, setCurrencyState] = useState(getPreferredCurrency());

  useEffect(() => subscribePreferredCurrency(setCurrencyState), []);

  const value = useMemo(
    () => ({
      currency,
      setCurrency: setPreferredCurrency,
    }),
    [currency],
  );

  return (
    <CurrencyPreferenceContext.Provider value={value}>
      {children}
    </CurrencyPreferenceContext.Provider>
  );
}
