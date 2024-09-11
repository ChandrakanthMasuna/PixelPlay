import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
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
