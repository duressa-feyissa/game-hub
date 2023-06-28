import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Game } from "../entities/Game";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];

  const fetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text colorScheme="red">{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGames}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={"10px"}
        >
          {isLoading &&
            Skeleton.map((id) => (
              <GameCardContainer key={id}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game: Game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;

/**
 *       {hasNextPage && (
        <Button
          marginY={"20px"}
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage}
        >
          {" "}
          Load More{" "}
        </Button>
      )}
 */
