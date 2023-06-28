import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColoModeSwitch />
    </HStack>
  );
}
