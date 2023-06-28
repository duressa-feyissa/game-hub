import { useInfiniteQuery  } from '@tanstack/react-query';
import APIClient, {FetchResponse} from '../service/api-client';
import ms from 'ms';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';


const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  
  const gameQuery = useGameQueryStore(state => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam=1}) => 
      apiClient.getAll({ params: {genres: gameQuery.genreId, parent_platforms: gameQuery.platformId,
        ordering: gameQuery. sortOrder, search: gameQuery.searchText,
        page: pageParam
      }}),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1: undefined;
    },
    staleTime: ms('24h')

  }); 
}

export default useGames; 