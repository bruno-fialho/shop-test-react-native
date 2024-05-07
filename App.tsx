import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components/native';

import queryClient from '@services/query';
import theme from './src/theme';
import {Routes} from './src/routes';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
