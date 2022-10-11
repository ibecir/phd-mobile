import {Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainParamList} from '@navigation';

type NavigationProps = NativeStackScreenProps<MainParamList, 'Welcome'>;

const Welcome = ({navigation, route}: NavigationProps) => {
  console.log(navigation, route);
  return <Text>Welcome</Text>;
};

export default Welcome;
