import React, { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEY_THEME } from '@/common/constants';
import { ThemeProviderProps, ThemeState, ThemeValue } from './Theme.types';

const localStorage = window.localStorage;

const getThemeFromStorage = (storage: Storage): ThemeValue => {
  const theme = storage.getItem(LOCAL_STORAGE_KEY_THEME);

  if (theme === 'light' || theme === 'dark') return theme;

  return 'light';
};

const initialThemeState: ThemeState = {
  theme: getThemeFromStorage(localStorage),
  setTheme: () => null,
};

const ThemeContext = React.createContext<ThemeState>(initialThemeState);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
export { ThemeContext };
