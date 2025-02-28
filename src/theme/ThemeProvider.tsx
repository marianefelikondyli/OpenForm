import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
