import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import ms from 'ms';
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h')

})

export default useGenres;

/**
 * const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(response => response.data),
  staleTime: 1000 * 60 * 60 * 24 * 30

})
 */