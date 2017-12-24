import axios from 'axios';
import { FETCH_WEATHER } from '../constants/ActionTypes';
import { ROOT_URL } from '../constants';


export const fetchWeather = (cityName) => {
    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
};
