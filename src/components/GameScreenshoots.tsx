import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshoots = ({ gameId }: Props) => {
  const { data: game, isLoading, error } = useScreenshots(gameId);

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {game?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
