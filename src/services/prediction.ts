import axios from 'axios';
import type {PredictionFormType} from 'services/types';
import config from './config';

const sendPrediction = async (
  params: PredictionFormType,
): Promise<PredictionFormType> => {
  return axios
    .post(config.BASE_URL + '/prediction/perfusors', params)
    .then(response => {
      const {data} = response;
      return data as PredictionFormType;
    });
};

export default {sendPrediction};
