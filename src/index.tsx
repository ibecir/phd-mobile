import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, MainNavigator} from '@navigation';
import {ThemeProvider} from '@shopify/restyle';
import theme from './theme';
import {useAppSelector} from '@hooks';
import {QueryClient, QueryClientProvider} from 'react-query';

const Root = () => {
  const {token, isLoading, isSignedOut} = useAppSelector(state => state.auth);
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {token === '' ? <AuthNavigator /> : <MainNavigator />}
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Root;
