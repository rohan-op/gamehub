import React from "react";
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
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
