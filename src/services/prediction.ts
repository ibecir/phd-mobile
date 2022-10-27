import axios from 'axios';
import type { PredictionFormType } from 'services/types';
import config from './config';
import { Alert } from 'react-native';

const sendPrediction = async (params: any): Promise<any> => {
  return axios
    .post(config.BASE_URL + '/prediction/perfusors', params)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      Alert.alert('Wrong parameters sent', 'Wrong parameters sent', [
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        },
      ]);
    });
};

export default { sendPrediction };
