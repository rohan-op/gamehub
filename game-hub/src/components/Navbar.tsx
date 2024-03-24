import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Prop {
  onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Prop) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Search onSearch={onSearch}></Search>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
