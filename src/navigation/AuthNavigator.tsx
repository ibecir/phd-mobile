import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens';

export type AuthParamList = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthStackScreens = (): JSX.Element => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
