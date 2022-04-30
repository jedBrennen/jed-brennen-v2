export type ThemeValue = 'light' | 'dark';

export interface ThemeState {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
