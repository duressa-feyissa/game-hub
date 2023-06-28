import { useParams } from "react-router-dom";
import { GameAttributes } from "../components/GameAttributes";
import { Spinner, Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
