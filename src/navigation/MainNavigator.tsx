import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PredictionFormScreen, ResultsScreen, WelcomeScreen} from '@screens';

export type MainParamList = {
  Welcome: undefined;
  Results: {id: string; name: number};
  PredictionForm: undefined;
};

const AuthStack = createNativeStackNavigator<MainParamList>();

const AuthStackScreens = (): JSX.Element => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Results" component={ResultsScreen} />
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen
        name="PredictionForm"
        component={PredictionFormScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
