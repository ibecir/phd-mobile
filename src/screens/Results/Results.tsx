import { View, Button, ScrollView, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@navigation';

type NavigationProps = NativeStackScreenProps<MainParamList, 'Results'>;

const Results = ({ navigation, route }: NavigationProps) => {
  // const {data, isLoading} = useFetchResults();
  // console.log(data, isLoading, route);
  return (
    <View>
      <Button
        onPress={() => {
          //navigation.goBack();
          navigation.navigate('PredictionForm');
        }}
        title="New Prediction"
        accessibilityLabel="Learn more about this purple button"
      />
      <ScrollView>
        <View />
      </ScrollView>
    </View>
  );
};

export default Results;
