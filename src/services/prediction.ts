import axios from 'axios';
import type { PredictionFormType } from 'services/types';
import config from './config';

const sendPrediction = async (params: any): Promise<any> => {
  return axios
    .post(config.BASE_URL + '/prediction/perfusors', params)
    .then(response => {
      const { data } = response;
      return data;
    });
};

export default { sendPrediction };
