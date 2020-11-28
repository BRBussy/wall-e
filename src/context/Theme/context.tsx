import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { defaultTheme } from './theme';

function MuiThemeContext({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}

export default MuiThemeContext;
