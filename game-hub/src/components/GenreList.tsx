import React from "react";
import useGenre from "../hooks/useGenre";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  list,
} from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  // if (isLoading) return <Spinner />;
  if (isLoading) return <GenreListSkeleton />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={5}
            />
            <Text fontSize="xl">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
