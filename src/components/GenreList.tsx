import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number | undefined;
}

const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={"3px"}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={"5px"}>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                objectFit={"cover"}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
