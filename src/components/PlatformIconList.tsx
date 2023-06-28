import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { PlatForm } from "../entities/PlatForm";

interface Props {
  platforms: PlatForm[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const inconMaps: { [key: string]: IconType } = {
    pc: FaWindows,
    playstatition: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform, index) => (
        <Icon as={inconMaps[platform.slug]} key={index} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
