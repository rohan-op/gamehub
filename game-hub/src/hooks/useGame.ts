import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Games {
    id: number;
    name: string;
  }
  
  interface FetchGamesReponse {
    count: number;
    results: Games[];
  }

const useGame = () => {
    const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesReponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {if (err instanceof CanceledError) return;
        setError(err.message)});
    
    return () => controller.abort()
  },[]);

  return {games, error}
}

export default useGame