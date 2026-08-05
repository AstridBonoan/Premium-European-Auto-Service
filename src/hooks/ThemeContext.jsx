import { createContext, useContext } from 'react';
import { useTheme } from './useScrollProgress';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const themeApi = useTheme();
  return <ThemeContext.Provider value={themeApi}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
}
