import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import getCroppedImagesUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImagesUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" paddingY={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
