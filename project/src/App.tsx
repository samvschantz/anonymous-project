import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CatFactDisplay from './components/CatFactDisplay/CatFactDisplay';
import { Paper, ThemeProvider, createTheme } from '@mui/material';

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => 
(
  <ThemeProvider theme={darkTheme}>
    <QueryClientProvider client={queryClient}>
      <Paper className="App">
        <CatFactDisplay />
      </Paper>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
