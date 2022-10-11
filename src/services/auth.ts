import axios from 'axios';
import type {LoginParams, LoginResponse} from './types';
import config from './config';

const login = async (params: LoginParams): Promise<LoginResponse> => {
  return axios.post(config.BASE_URL + '/auth/login', params).then(response => {
    const {data} = response;
    return {
      accessToken: data?.accessToken,
      email: data?.email,
      username: data?.username,
    };
  });
};

export default {login};
