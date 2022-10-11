import axios from 'axios';
import {useQuery} from 'react-query';
import config from './config';
import {LoginParams} from './types';

const useFetchResults = () =>
  useQuery('results', (): Promise<LoginParams[]> => {
    return axios.get(config.BASE_URL + '/demo/all').then(response => {
      return response.data;
    });
  });

export default useFetchResults;
