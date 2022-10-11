import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, MainNavigator } from '@navigation';
import { ThemeProvider } from '@shopify/restyle';
import { ToastProvider } from 'react-native-toast-notifications';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme from './theme';
import { useAppSelector } from '@hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

const Root = () => {
  const { token } = useAppSelector(state => state.auth);
  const queryClient = new QueryClient();
  const insets = useSafeAreaInsets();
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider
        placement="top"
        animationType="zoom-in"
        successColor={theme.colors.success}
        dangerColor={theme.colors.danger}
        warningColor={theme.colors.warning}
        normalColor={theme.colors.primary}
        offsetTop={insets.top}
        offsetBottom={insets.bottom}
        textStyle={{ textAlign: 'center' }}
      >
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            {token === '' ? <AuthNavigator /> : <MainNavigator />}
          </NavigationContainer>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default Root;
