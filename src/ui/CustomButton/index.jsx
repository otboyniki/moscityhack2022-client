import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Button } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#20df60',
  },
  palette: {
    primary: {
      dark: '#ec8338',
      main: '#ff8e3c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#eff0f3',
      contrastText: '#0d0d0d',
    },
  },
});

const CustomButton = ({ children, ...props }) => (
  <ThemeProvider theme={theme}>
    <Button {...props}>
      {children}
    </Button>
  </ThemeProvider>
);

export default CustomButton;
