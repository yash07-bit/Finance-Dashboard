import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'lumina-preferred-currency';
const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP'];

const listeners = new Set();

function readStoredCurrency() {
  if (typeof window === 'undefined') return 'USD';

  try {
    const storedCurrency = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_CURRENCIES.includes(storedCurrency) ? storedCurrency : 'USD';
  } catch {
    return 'USD';
  }
}

let preferredCurrency = readStoredCurrency();

function broadcastCurrencyChange() {
  listeners.forEach((listener) => listener(preferredCurrency));
}

export function getPreferredCurrency() {
  return preferredCurrency;
}

export function setPreferredCurrency(currency) {
  if (!SUPPORTED_CURRENCIES.includes(currency) || currency === preferredCurrency) return;

  preferredCurrency = currency;

  try {
    window.localStorage.setItem(STORAGE_KEY, currency);
  } catch {
    // Ignore storage errors and keep the in-memory preference active.
  }

  broadcastCurrencyChange();
}

export function subscribePreferredCurrency(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const CurrencyPreferenceContext = createContext({
  currency: preferredCurrency,
  setCurrency: setPreferredCurrency,
});

export function CurrencyPreferenceProvider({ children }) {
  const [currency, setCurrencyState] = useState(preferredCurrency);

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

export function useCurrencyPreference() {
  return useContext(CurrencyPreferenceContext);
}
