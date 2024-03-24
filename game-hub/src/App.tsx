import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGame";
import OrderMenu from "./components/OrderMenu";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} padding={3} marginBottom={3}>
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformMenu>
          <OrderMenu
            onSelectedOrder={(sort: string) =>
              setGameQuery({ ...gameQuery, sort })
            }
            selectedOrder={gameQuery.sort}
          ></OrderMenu>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
