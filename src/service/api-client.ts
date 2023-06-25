import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    results: T[];
    next: string | null;
    count: number;
  }

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '5154c9659ef84696ab3e9a1278980013',
    }});

class APIClient<T> {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then(response => response.data);
    }

}

export default APIClient;