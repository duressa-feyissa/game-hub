import axios from 'axios';

export interface FetchResponse<T> {
    results: T[];
    count: number;
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '5154c9659ef84696ab3e9a1278980013',
    }});