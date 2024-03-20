import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          skeleton.map((s) => (
            // <GameCardContainer>
            <GameCardSkeleton key={s}></GameCardSkeleton>
            // </GameCardContainer>
          ))}
        {data.map((game) => (
          // <GameCardContainer>
          <GameCard key={game.id} game={game}></GameCard>
          // </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
