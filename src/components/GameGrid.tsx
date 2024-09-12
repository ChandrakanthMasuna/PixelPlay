import { Text } from "@chakra-ui/react";
import useGames from "./useGames";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <ul>
          <li>{game.name}</li>
        </ul>
      ))}
    </>
  );
};

export default GameGrid;
