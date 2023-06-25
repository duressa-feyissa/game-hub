import { useInfiniteQuery  } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, {FetchResponse} from '../service/api-client';
import ms from 'ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  
  const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam=1}) => 
      apiClient.getAll({ params: {genres: gameQuery.genreId, parent_platforms: gameQuery.platfromId,
        ordering: gameQuery. sortOrder, search: gameQuery.searchText,
        page: pageParam
      }}),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1: undefined;
    },
    staleTime: ms('24h')

  });

export default useGames; 