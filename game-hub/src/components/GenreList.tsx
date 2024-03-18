import React from "react";
import useGenre from "../hooks/useGenre";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
