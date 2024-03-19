import {
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IoIosMore } from "react-icons/io";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: FaGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  let moredots = false;
  if (platforms.length >= 6) {
    platforms = platforms.slice(0, 5);
    moredots = true;
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={IconMap[platform.slug]}
          color="gray.500"
        />
      ))}
      {moredots && <Icon key="more" color="gray.500" as={IoIosMore}></Icon>}
    </HStack>
  );
};

export default PlatformIconList;
