import { useQuery } from "@tanstack/react-query";
import apiClient from '../service/api-client';
import { FetchResponse } from '../service/api-client'

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(response => response.data),
  staleTime: 1000 * 60 * 60 * 24 * 30

})

export default useGenres;
