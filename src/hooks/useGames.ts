import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../service/api-client';
import { FetchResponse } from '../service/api-client'

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
  
const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => 
      apiClient.get<FetchResponse<Game>>("/games", { params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery. sortOrder, search: gameQuery.searchText
      }}).then(response => response.data),
  });

export default useGames; 