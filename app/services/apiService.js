import {Config} from '../Config/';
import apisauce from 'apisauce';

const create = (baseURL = Config.API_URL) => {
  let api = '';

  api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  const getData = params => api.get('timeslots', params);

  return {
    getData,
  };
};

export default create();
