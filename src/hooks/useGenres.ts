import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 1000 * 60 * 60 * 24 * 30

})

export default useGenres;

/**
 * const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(response => response.data),
  staleTime: 1000 * 60 * 60 * 24 * 30

})
 */